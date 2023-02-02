import localStorage from './localStorageMock.js';

export const toDoListArray = [];

export const addTaskMock = (task) => {
  toDoListArray.push({ task, completed: false, id: toDoListArray.length + 1 });
  localStorage.setItem('tasks', toDoListArray);
};

export const deleteTaskMock = (taskIndex) => {
  toDoListArray.splice(taskIndex, 1);
  toDoListArray.forEach((task, index) => {
    task.id = index + 1;
  });
  localStorage.setItem('tasks', toDoListArray);
};

export const editTaskMock = (id, toDoListArray, newValue) => {
  const taskIndex = toDoListArray.findIndex((task) => task.id === id);
  toDoListArray[taskIndex].description = newValue;
  localStorage.setItem('tasks', toDoListArray);
};
