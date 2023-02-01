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
  test('Add only one item', () => {
    addTask.showList(tasks, todoList);
    const li = todoList.querySelectorAll('.toDoContainer');
    expect(li).toHaveLength(2);
  });

  test('Remove only one item', () => {
    deleteTask.delList(0, tasks);
    deleteTask.showList(tasks, todoList);
    const li = todoList.querySelectorAll('.toDoContainer');
    expect(li).toHaveLength(1);
  });
});
