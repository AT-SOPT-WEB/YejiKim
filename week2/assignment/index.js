import { todos as InitialData } from './data.js';

const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__input');
const todoSelect = document.querySelector('.todo__select');
const todoAddBtn = document.querySelector('.todo__add-btn');
const todoDeleteBtn = document.querySelector('.todo__delete-btn');
const todoCompleteBtn = document.querySelector('.todo__complete-btn');
const todoCheckAll = document.querySelector('.todo__check-all');
const todoTable = document.querySelector('.todo__table');
const todoList = document.querySelector('.todo__list');

const STORAGE_KEY = 'todo-data';

function loadTodo() {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || saveTodo(InitialData);
    return todos;
}

function initTodo() {
    const todos = loadTodo();
    renderTodoList(todos);
}

function renderTodoList(todos) {
    const tbody = document.querySelector('.todo__list');
    tbody.innerHTML = '';

    todos.forEach(todo => {
        const tr = document.createElement('tr');
        tr.dataset.id = todo.id;

        const tdCheck = document.createElement('td');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.className = 'todo__row-check';
        cb.checked = todo.completed;
        tdCheck.appendChild(cb);
        tr.appendChild(tdCheck);

        const tdPriority = document.createElement('td');
        tdPriority.textContent = todo.priority;
        tr.appendChild(tdPriority);

        const tdDone = document.createElement('td');
        tdDone.textContent = todo.completed ? '✅' : '❌';
        tr.appendChild(tdDone);

        const tdTitle = document.createElement('td');
        tdTitle.textContent = todo.title;
        tr.appendChild(tdTitle);

        tbody.appendChild(tr);
    });
}

function saveTodo(todo) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todo));
    return todo;
}

initTodo();