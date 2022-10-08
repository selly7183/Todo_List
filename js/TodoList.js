const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoForm input");
const todoList = document.querySelector(".todo-list");

const TODO_KEY = "toDos";
let toDos = [];

function saveTodo() {
	localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
	saveTodo();
}

function paintTodo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	const button = document.createElement("button");
	button.innerText = "x";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleTodo(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	const todoObj = {
		text: newTodo,
		id: Date.now(),
	};
	toDos.push(todoObj);
	paintTodo(todoObj);
	saveTodo();
}
todoForm.addEventListener("submit", handleTodo);

const savedTodo = localStorage.getItem(TODO_KEY);
if (savedTodo !== null) {
	const parsedTodo = JSON.parse(savedTodo);
	toDos = parsedTodo;
	parsedTodo.forEach(paintTodo);
}
