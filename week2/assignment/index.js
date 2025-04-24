import { todos as InitialData } from './data.js';

const STORAGE_KEY = 'todo-data';

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const ui = {
    listBody: $('.todo__list'),
    filterBtns: $$('.todo__filter-btn[data-filter]'),
    dropdown: $('.todo__dropdown'),
    dropdownBtn: $('#priority-dropdown-btn'),
    dropdownMenu: $('#priority-dropdown-menu'),
};

const state = {
    allTodos: [],
    currentFilter: 'all',
    priorityFilter: null,
};

// 로컬 스토리지에서 데이터 로드
function loadTodo() {
    state.allTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || saveTodo(InitialData);
}

// 로컬 스토리지 저장 
function saveTodo(todo) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todo));
    return todo;
}

// 카테고리 필터링 
function filterTodos() {
    switch (state.currentFilter) {
        case 'completed':
            return state.allTodos.filter(todo => todo.completed);
        case 'incomplete':
            return state.allTodos.filter(todo => !todo.completed);
        case 'priority':
            return state.allTodos.filter(todo => todo.priority === state.priorityFilter);
        default:
            return state.allTodos;
    }
}

// 할 일 행 생성
function createTodoRow(todo) {
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

    return tr;
}

// 할 일 목록 렌더링 
function renderTodoList() {
    const filteredTodos = filterTodos();

    ui.listBody.innerHTML = '';

    filteredTodos.forEach(todo => {
        const row = createTodoRow(todo);
        ui.listBody.appendChild(row);
    });
}

// 이벤트 바인딩 
function bindFilterButtons() {
    ui.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentFilter = btn.dataset.filter;

            ui.filterBtns.forEach(b => {
                b.classList.toggle(
                    'todo__filter-btn--active',
                    b.dataset.filter === state.currentFilter
                );
            });
            renderTodoList(filterTodos());
        })
    })
}


function bindPriorityDropdown() {
    ui.dropdownBtn.addEventListener('click', e => {
        e.stopPropagation();
        const open = ui.dropdown.classList.toggle('open');
        ui.dropdownBtn.setAttribute('aria-expanded', open);
    });

    ui.dropdownMenu.addEventListener('click', e => {
        const btn = e.target.closest('button[data-priority]');
        if (!btn) return;

        state.currentFilter = 'priority';
        state.priorityFilter = Number(btn.dataset.priority);

        ui.dropdownBtn.textContent = `중요도 ${state.priorityFilter}`;
        ui.dropdown.classList.remove('open');
        ui.filterBtns.forEach(b =>
            b.classList.toggle('todo__filter-btn--active', false)
        );
        ui.dropdownBtn.classList.add('todo__filter-btn--active');

        renderTodoList();
    });

    document.addEventListener('click', () => {
        ui.dropdown.classList.remove('open');
        ui.dropdownBtn.setAttribute('aria-expanded', false);
    });
}

function init() {
    loadTodo();
    bindFilterButtons();
    bindPriorityDropdown();
    renderTodoList();
}

init();