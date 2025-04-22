import { todos as InitialData } from './data.js';

const STORAGE_KEY = 'todo-data';

const todoFilterBtns = document.querySelectorAll('.todo__filter-btn[data-filter]');
const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__input');
const todoSelect = document.querySelector('.todo__select');
const todoAddBtn = document.querySelector('.todo__add-btn');
const todoDeleteBtn = document.querySelector('.todo__delete-btn');
const todoCompleteBtn = document.querySelector('.todo__complete-btn');
const todoCheckAll = document.querySelector('.todo__check-all');
const todoTable = document.querySelector('.todo__table');
const todoList = document.querySelector('.todo__list');
const priorityDropdown = document.querySelector('.todo__dropdown');
const priorityDropdownBtn = document.querySelector('#priority-dropdown-btn');
const priorityDropdownMenu = document.querySelector('#priority-dropdown-menu');

let allTodos = [];
let currentFilter = 'all';
let priorityFilter = null;

function loadTodo() {
    allTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || saveTodo(InitialData);
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

function initFilterButtons() {
    todoFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;

            todoFilterBtns.forEach(b => {
                b.classList.toggle(
                    'todo__filter-btn--active',
                    b.dataset.filter === currentFilter
                );
            });

            renderTodoList(filterTodos());
        })
    })
}

function filterTodos() {
    switch (currentFilter) {

        case 'completed':
            return allTodos.filter(todo => todo.completed);
        case 'incomplete':
            return allTodos.filter(todo => !todo.completed);
        case 'priority':
            return allTodos.filter(todo => todo.priority === priorityFilter);
        default:
            return allTodos;
    }
}

function initTodo() {
    loadTodo();
    initFilterButtons();
    renderTodoList(allTodos);
}

priorityDropdownBtn.addEventListener('click', e => {
    e.preventDefault();
    const isOpen = priorityDropdown.classList.toggle('open');
    priorityDropdownBtn.setAttribute('aria-expanded', isOpen);
    priorityDropdownMenu.classList.toggle('open');
});

priorityDropdownMenu.addEventListener('click', e => {
    const item = e.target.closest('button[data-priority]');
    if (!item) return;

    currentFilter = 'priority';
    priorityFilter = Number(item.dataset.priority);
    priorityDropdownBtn.textContent = `중요도 ${priorityFilter}`;
    priorityDropdown.classList.remove('open');
    priorityDropdownBtn.setAttribute('aria-expanded', false);

    renderTodoList(filterTodos());
})

initTodo();