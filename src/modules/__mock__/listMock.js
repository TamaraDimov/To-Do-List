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

export const editTaskMock = (index, newValue) => {
  toDoListArray[index].description = newValue;
  localStorage.setItem('tasks', toDoListArray);
};

export const markTaskAsCompletedMock = (index) => {
  toDoListArray[index].completed = true;
  localStorage.setItem('tasks', toDoListArray);
};

export const clearCompletedTasksMock = (toDoListArray) => {
  toDoListArray = toDoListArray.filter((task) => task.completed === false);
  localStorage.setItem('tasks', toDoListArray);
  return toDoListArray;
};
