var todos = [];
var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('todo-input');

// Task entry; text changes on button click

function addTodo() {

	if (todoInput.value !== "") {
		var todoText = todoInput.value; // stores yielded input value

		todos.push(todoText); // push input value to todos array

		displayNewTodo(); // fx to add new todos
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

// Task entered is listed

function displayNewTodo() {
	var todoIndex = (todos.length-1);
	var todo = todos[todoIndex];

	var newTodo = document.createElement('li');
	newTodo.id = todoIndex;
	newTodo.innerHTML = todo;

	todoList.appendChild(newTodo);

	appendOptionsButtons(todoIndex, newTodo);
}

// Delete task from list

function removeTodo(index) {
	todos.splice(index,1);

	var toDoToRemove = document.getElementById('' + index + '');

	todoList.removeChild(toDoToRemove);

}

// Edit task description in list

function editInputField(index) {
	var toDoToChange = document.getElementById('' + index + '');

	var editInput = document.createElement('input');

	editInput.type = 'text';
	editInput.id = 'edit';
	editInput.className = 'edit-input';
	editInput.placeholder = 'Edit the todo';

	var editButton = document.createElement('button');
	editButton.innerHTML = "Update Todo";

	editButton.onclick = function() {
		updateTodo(index);
	}

	toDoToChange.appendChild(editInput);
	toDoToChange.appendChild(editButton);
}

// Update edited task decription in list

function updateTodo(index) {
	var editInput = document.getElementById('edit', '' + index + '');
	var updatedTodo = editInput.value;

	if (updatedTodo !== "") {
		todos[index] = updatedTodo;

		var todo = document.getElementById('' + index + '');

		todo.innerHTML = updatedTodo;
		appendOptionsButtons(index,todo);
	}

	
}

// Create edit and delete button functions; prevent duplicate "Update Todo" buttons & inputs

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