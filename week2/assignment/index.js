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
    input: $('#new-todo'),
    select: $('#new-priority'),
    addForm: $('#todo-form'),
    checkAll: $('.todo__check-all'),
    completeBtn: $('#complete-btn'),
    deleteBtn: $('#delete-btn'),
    modal: $('.todo__modal'),
    modalBtn: $('.todo__modal-btn'),
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
    tr.draggable = true;

    const tdCheck = document.createElement('td');
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.className = 'todo__row-check';
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

// 할 일 추가
function handleAddTodo(e) {
    e.preventDefault();
    const title = ui.input.value.trim();
    const priority = ui.select.value;

    if (!title || !priority) {
        alert('할 일과 중요도를 모두 입력해주세요 !!!');
        return;
    }

    const newTodo = {
        id: state.allTodos.length ? Math.max(...state.allTodos.map(t => t.id)) + 1 : 1,
        title,
        priority: Number(priority),
        completed: false,
    };

    state.allTodos.push(newTodo);
    saveTodo(state.allTodos);

    renderTodoList();

    ui.addForm.reset();
}

// 할 일 리스트 정렬 
function sortDragTodos(dragId, targetId) {
    const todos = state.allTodos;
    const fromIndex = todos.findIndex(t => t.id === dragId);
    const toIndex = todos.findIndex(t => t.id === targetId);

    if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0) return;

    // splice(삽입할 인덱스, 아무것도 삭제 하지 않음, 삽입할 요소)   
    todos.splice(toIndex, 0, todos.splice(fromIndex, 1)[0]);
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

function bindAddTodo() {
    ui.addForm.addEventListener('submit', handleAddTodo);
}

function bindCheckAll() {
    ui.checkAll.addEventListener('change', () => {
        ui.listBody
            .querySelectorAll('.todo__row-check')
            .forEach(cb => cb.checked = ui.checkAll.checked);
    });
}

function bindRowChecks() {
    ui.listBody.addEventListener('change', e => {
        if (!e.target.matches('.todo__row-check')) return;

        const checkboxes = ui.listBody.querySelectorAll('.todo__row-check');

        let isAllChecked = true;

        for (const cb of checkboxes) {
            if (!cb.checked) {
                isAllChecked = false;
                break;
            }
        }
        ui.checkAll.checked = isAllChecked;
    });
}

function bindDragAndDrop() {
    ui.listBody.addEventListener('dragstart', e => {
        const tr = e.target.closest('tr');
        if (!tr) return;
        e.dataTransfer.setData('text/plain', tr.dataset.id);
    });

    ui.listBody.addEventListener('dragover', e => {
        e.preventDefault();
    });

    ui.listBody.addEventListener('drop', e => {
        e.preventDefault();

        const tr = e.target.closest('tr');
        if (!tr) return;

        const dragId = Number(e.dataTransfer.getData('text/plain'));
        const targetId = Number(tr.dataset.id);
        sortDragTodos(dragId, targetId);

        saveTodo(state.allTodos);
        renderTodoList();
    });
}

function bindCompleteButton() {
    ui.completeBtn.addEventListener('click', () => {
        const checkedBoxes = ui.listBody.querySelectorAll('.todo__row-check:checked');
        if (checkedBoxes.length === 0) return

        checkedBoxes.forEach(cb => {
            const id = Number(cb.closest('tr').dataset.id);
            const todo = state.allTodos.find(t => t.id === id);

            if (todo) {
                todo.completed = cb.checked;
            }
        });

        saveTodo(state.allTodos);
        renderTodoList();
    });
}

function bindDeleteButton() {
    ui.deleteBtn.addEventListener('click', () => {
        const checkedBoxes = ui.listBody.querySelectorAll('.todo__row-check:checked');
        if (checkedBoxes.length === 0) return

        const removeIdArray = Array.from(checkedBoxes).map(cb => Number(cb.closest('tr').dataset.id));
        state.allTodos = state.allTodos.filter(t => !removeIdArray.includes(t.id));

        saveTodo(state.allTodos);
        renderTodoList();

        ui.checkAll.checked = false;
    });
}

function init() {
    loadTodo();
    bindFilterButtons();
    bindPriorityDropdown();
    bindAddTodo();
    bindCheckAll();
    bindRowChecks();
    bindDragAndDrop();
    bindCompleteButton();
    bindDeleteButton();
    renderTodoList();
}

init();