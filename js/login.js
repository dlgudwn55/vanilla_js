const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const greeting = document.getElementById("greeting");

const USERNAME_KEY = "username";
const HIDDEN = "hidden";

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function handleLogin(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting();
}

function paintGreeting() {
    // hide login form and show greeting
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN);

    todoForm.classList.remove(HIDDEN);
    todoList.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show login form
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", handleLogin);
}
else {
    paintGreeting();
}


