/**
 * @jest-environment jsdom
 */

import {
  addTask,
  clearCompleted,
  editTask,
  deleteTask,
  markTask,
  renderToDoList,
} from './lists.js';
import { addTaskMock, toDoListArray } from './__mock__/listMock.js';
import localStorage from './__mock__/localStorageMock.js';

document.body.innerHTML = `
<section class="toDo_list">
  <div class="title">
    <h1 class="toDo_title">Today's To Do</h1>
  </div>
  <div class="container">
    <input
      type="text"
      name="task"
      id="task"
      class="inputField"
      placeholder="Add new task"
    />
    <button class="insert-btn">Insert</button>
  </div>
  <ul class="toDoContainer"></ul>
  <button class="clearbtn">Clear all completed</button>
</section>
})`;

const todoList = document.querySelector('.toDoContainer');
const tasks = [
  {
    description: 'task1',
    completed: false,
    index: 1,
  },
  {
    description: 'task2',
    completed: false,
    index: 2,
  },
];

describe('Test', () => {
  test('Display only Two items on the ul container', () => {
    renderToDoList(tasks, todoList);
    const lis = todoList.children;
    expect(lis).toHaveLength(2);
  });

  test('Add a new item to todo list', () => {
    addTaskMock('New Task to make a test');
    expect(toDoListArray).toHaveLength(1);
    expect(localStorage.getItem('tasks')).toHaveLength(1);
  });

  // test('Remove only one item', () => {
  //   // const itemToRemove = todoList.children[1];
  //   todoList.addEventListener('click', (e) => {
  //     // if (e.target.closest('.trash-can')) {
  //     console.log('triggerd');
  //     deleteTask(e, tasks);
  //     // }
  //   });
  //   const clickEvent = new Event('click');
  //   todoList.dispatchEvent(clickEvent);
  //   const lis = todoList.children;
  //   expect(lis).toHaveLength(2);
  // });
});
