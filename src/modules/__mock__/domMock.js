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
