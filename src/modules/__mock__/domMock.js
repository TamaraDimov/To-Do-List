const renderToDoListMock = (toDoListArray, ul) => {
  ul.innerHTML = '';
  toDoListArray.forEach((toDo) => {
    const toDoItem = document.createElement('li');
    toDoItem.innerHTML = toDo.description;
    ul.appendChild(toDoItem);
  });
};

export default renderToDoListMock;