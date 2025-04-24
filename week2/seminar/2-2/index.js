
const input = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');

let todos = JSON.parse(localStorage.getItem("todos")) || [];

todos.forEach((todo) => {
    addTodo(todo);
});

addBtn.addEventListener('click', () => {
    const value = input.value; 

    if (!value) return;

    addTodo(value);

    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));

    input.value = "";
});

function addTodo(todo) {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
}