const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginForm input");
const message = document.querySelector(".message");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function Greeting(event) {
	event.preventDefault();
	const username = loginInput.value;
	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, username);
	paintGreeting(username);
}

function paintGreeting(username) {
	message.classList.remove(HIDDEN_CLASSNAME);
	message.innerText = `Hello ${username}`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
if (saveUsername == null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", Greeting);
} else {
	paintGreeting(saveUsername);
}
