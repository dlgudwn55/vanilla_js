// IN "login.js"
// const todoForm = document.getElementById("todo-form");
// const todoInput = todoForm.querySelector("input");
// const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

// 제출받은 것을 저장하는 함수
function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// 선택된 항목(li)을 지우는 함수
function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((item) => item.id !== parseInt(li.id));
    saveTodo();
}

// 제출된 것을 그리는 함수
function paintTodo(todoObj) {
    const li = document.createElement("li");
    li.id = todoObj.id;
    const div = document.createElement("div");
    const button = document.createElement("button");
    div.innerText = todoObj.text;
    button.innerText = "Delete";
    button.addEventListener("click", deleteTodo);

    li.appendChild(div);
    li.appendChild(button);
    todoList.appendChild(li);
}

// 제출받는 함수
function handleSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {id: Date.now(), text: newTodo};
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
    console.log(todos);
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(element => {
        paintTodo(element);
    });
}