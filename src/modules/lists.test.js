/**
 * @jest-environment jsdom
 */

import {
  addTaskMock,
  toDoListArray,
  editTaskMock,
  deleteTaskMock,
} from './__mock__/listMock.js';
import localStorage from './__mock__/localStorageMock.js';
import renderToDoListMock from './__mock__/domMock.js';

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

const ul = document.querySelector('.toDoContainer');

describe('Test', () => {
  test('Add a new item to todo list', () => {
    addTaskMock('New Task to make a test');
    expect(toDoListArray).toHaveLength(1);
    expect(localStorage.getItem('tasks')).toHaveLength(1);
  });

  test('Add a new item to DOM todo list', () => {
    renderToDoListMock(toDoListArray, ul);
    const lis = Array.from(ul.children);
    expect(lis).toHaveLength(1);
  });

  test('Edit task description', () => {
    const newValue = 'updated task description';
    editTaskMock(toDoListArray[0].id, toDoListArray, newValue);
    expect(toDoListArray[0].description).toEqual(newValue);
  });

  test('Remove only one item', () => {
    deleteTaskMock(0);
    expect(toDoListArray).toHaveLength(0);
    expect(localStorage.getItem('tasks')).toHaveLength(0);
  });

  test('Remove one item from DOM todo list', () => {
    renderToDoListMock(toDoListArray, ul);
    const lis = Array.from(ul.children);
    expect(lis).toHaveLength(0);
  });
});
