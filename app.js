var todos = [];

//saving var

var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('todo-input');

//writing fx

function addTodo() {

	if (todoInput.value !== "") {
		var todoText = todoInput.value; // stores yielded input value

		todos.push(todoText); // push input value to todos array

		displayNewTodo(); // fx to add new todos

		console.log("Hey it's working!");
	}

	var buttonText = document.getElementById('button-changing');

		if (buttonText.innerHTML == "Bring it on") {
			buttonText.innerHTML = "I got this";
		} else if (buttonText.innerHTML == "I got this") {
			buttonText.innerHTML = "Let's go now";
		} else if (buttonText.innerHTML == "Let's go now") {
			buttonText.innerHTML = "Bring it on";
		}
}

//Add fx

function displayNewTodo() {
	var todoIndex = (todos.length-1); //define var at last index of array
	var todo = todos[todoIndex];

	var newTodo = document.createElement('li'); //create new elem as brand new list item
	newTodo.id = todoIndex; //assign new id (its index) with each new list item
	newTodo.innerHTML = todo; //last thing in array, put it in b/n <ul> </ul> in .html file; "innerHTML Removes all of element's children, parses the content string and assigns the resulting nodes as children of the element."

	todoList.appendChild(newTodo); //nest newTodo in todoList; ".appendChild() The returned value is the appended child.""

	appendOptionsButtons(todoIndex, newTodo); //buttons fx
}

//Delete fx

function removeTodo(index) {
	todos.splice(index,1); //cuts element directly off array, starts at index, deletes 1 elem

	var toDoToRemove = document.getElementById('' + index + ''); //storing elem we want to remove

	todoList.removeChild(toDoToRemove); //removing the elem

}

//Edit fx

function editInputField(index) {
	var toDoToChange = document.getElementById('' + index + ''); // takes argument as number and store in var

	var editInput = document.createElement('input'); // Create a brand new input element

	editInput.type = 'text'; // adds type = "text"
	editInput.id = 'edit'; // adds id = "edit"
	editInput.className = 'edit-input'; // adds a class = "edit-input"
	editInput.placeholder = 'Edit the todo'; // placeholder text

	var editButton = document.createElement('button'); // create button elem
	editButton.innerHTML = "Update Todo"; // inside button, "update todo"

	editButton.onclick = function() { // create onclick atrribute
		updateTodo(index);
		console.log("working!");
	}

	toDoToChange.appendChild(editInput);
	toDoToChange.appendChild(editButton);
}

//Update fx

function updateTodo(index) {
	var editInput = document.getElementById('edit', '' + index + '');
	var updatedTodo = editInput.value;

	if (updatedTodo !== "") {
		todos[index] = updatedTodo; // replacing todo at the index with updated todo, replacing todo in array

		var todo = document.getElementById('' + index + '');

		todo.innerHTML = updatedTodo; // replacing todo in html
		appendOptionsButtons(index,todo); // update button

		console.log("working too!");
	}

	
}

//Buttons

function appendOptionsButtons(index,todo) {
	var deleteButton = document.createElement('button'); // create a delete button
	deleteButton.innerHTML = 'X'; // text on delete button
	deleteButton.onclick = function() {
		removeTodo(index);		
	}

	var editButton = document.createElement('button'); // create edit button
	editButton.innerHTML = 'edit';
	editButton.id = 'edit-button'
	editButton.onclick = function() {
		editInputField(index);
		document.getElementById('edit-button').disabled = 'true'; // disables button clicks after 1st click; prevents multiple edit buttons and input boxes from populating the list item 
	}

	todo.appendChild(deleteButton);
	todo.appendChild(editButton); 
}