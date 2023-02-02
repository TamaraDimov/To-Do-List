import localStorage from './localStorageMock.js';

export const toDoListArray = [];

export const addTaskMock = (task) => {
  toDoListArray.push({ task, completed: false, id: toDoListArray.length + 1 });
  localStorage.setItem('tasks', toDoListArray);
};

export const deleteTask = (e, toDoListArray) => {
  // const clickedCross = e.target.closest('.trash-can');
  // const clickedTask = clickedCross.previousElementSibling;
  // const taskIndex = toDoListArray.findIndex(
  //   (task) => task.task === clickedTask.value
  // );
  // toDoListArray.splice(taskIndex, 1);
  // toDoListArray.forEach((task, index) => {
  //   task.id = index + 1;
  // });
  // updateLocalStorage(toDoListArray);
  // renderToDoList(toDoListArray);
};