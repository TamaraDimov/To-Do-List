/**
 * @jest-environment jsdom
 */

import {
  addTaskMock,
  toDoListArray,
  deleteTaskMock,
} from './__mock__/listMock.js';
import localStorage from './__mock__/localStorageMock.js';

describe('Test', () => {
  test('Add a new item to todo list', () => {
    addTaskMock('New Task to make a test');
    expect(toDoListArray).toHaveLength(1);
    expect(localStorage.getItem('tasks')).toHaveLength(1);
  });

  test('Remove only one item', () => {
    deleteTaskMock(0);
    expect(toDoListArray).toHaveLength(0);
    expect(localStorage.getItem('tasks')).toHaveLength(0);
  });
});
