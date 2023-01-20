import {
  renderToDoList,
  addTask,
  clearCompleted,
  editTask,
  deleteTask,
  markTask,
} from './list.js';
import { updateLocalStorage } from './storage.js';
import toDoTasks from '../task.js';

const input = document.querySelector('.inputField');
const todoList = document.querySelector('.toDoContainer');
const addTaskBtn = document.querySelector('.insert-btn');
const clearCompletedBtn = document.querySelector('.clearbtn');

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value !== '') {
    addTask(toDoTasks, input.value);
    input.value = '';
    updateLocalStorage(toDoTasks);
    renderToDoList(toDoTasks);
  }
});

addTaskBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addTask(toDoTasks, input.value);
    input.value = '';
    updateLocalStorage(toDoTasks);
    renderToDoList(toDoTasks);
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.toDoContainer-li-checkbox')) {
    markTask(e, toDoTasks);
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.toDoContainer-li-text')) {
    editTask(e, toDoTasks);
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.trash-can')) {
    deleteTask(e, toDoTasks);
  }
});

clearCompletedBtn.addEventListener('click', () => {
  const toDoList = clearCompleted(toDoTasks);
  updateLocalStorage(toDoTasks);
  renderToDoList(toDoList);
});
