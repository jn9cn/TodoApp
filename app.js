var todos = [];
var ind = 0;

//Saving var

var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('todo-input');

//Writing fx

function addTodo() {

	if (todoInput.value) {
		var todoText = todoInput.value; 

		todos.push(todoText); 

		displayNewTodo(); 

		console.log("Hey it's working!");

	}

	var buttonText = document.getElementById('button-changing');

	var changingMsgs = ["Bring it on", "I got this", "Let's go now", "Carpe Diem", "Get it done", ""];	
	
	if (buttonText.innerHTML === changingMsgs[ind]) {
		ind++;
		buttonText.innerHTML = changingMsgs[ind];
	}

	if (ind === changingMsgs.length-1) {
		ind = 0;
		buttonText.innerHTML = changingMsgs[ind];
	}
		 
}

//Add fx

function displayNewTodo() {
	var todoIndex = (todos.length-1); 
	var todo = todos[todoIndex];

	var newTodo = document.createElement('li'); 
	newTodo.id = todoIndex; 
	newTodo.innerHTML = todo; 

	todoList.appendChild(newTodo); 

	appendOptionsButtons(todoIndex, newTodo); 
}

//Delete fx

function removeTodo(index) {
	todos.splice(index,1); 

	var toDoToRemove = document.getElementById(index); 

	todoList.removeChild(toDoToRemove); 

}

//Edit fx

function editInputField(index) {
	var toDoToChange = document.getElementById(index); 

	var editInput = document.createElement('input'); 

	editInput.type = 'text'; 
	editInput.id = 'edit'; 
	editInput.className = 'edit-input'; 
	editInput.placeholder = 'Edit the todo'; 

	var editButton = document.createElement('button'); 
	editButton.innerHTML = "Update Todo"; 

	editButton.onclick = function() { 
		updateTodo(index);
		console.log("working!");
	}

	toDoToChange.appendChild(editInput);
	toDoToChange.appendChild(editButton);
}

//Update fx

function updateTodo(index) {
	var editInput = document.getElementById('edit', index);
	var updatedTodo = editInput.value;

	if (updatedTodo !== "") {
		todos[index] = updatedTodo; 

		var todo = document.getElementById(index);

		todo.innerHTML = updatedTodo; 
		appendOptionsButtons(index,todo); 

		console.log("working too!");
	}

	
}

//Buttons

function appendOptionsButtons(index,todo) {
	var deleteButton = document.createElement('button'); 
	deleteButton.innerHTML = 'X'; 
	deleteButton.onclick = function() {
		removeTodo(index);		
	}

	var editButton = document.createElement('button'); 
	editButton.innerHTML = 'edit';
	editButton.id = 'edit-button'
	editButton.onclick = function() {
		editInputField(index);
		document.getElementById('edit-button').disabled = 'true'; 
	}

	todo.appendChild(deleteButton);
	todo.appendChild(editButton); 
}