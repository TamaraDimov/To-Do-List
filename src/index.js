import './style.css';

const tasks = [
  {
    description: 'Take out the trash',
    completed: false,
    index: 1,
  },
  {
    description: 'Wash the dishes',
    completed: true,
    index: 3,
  },
  {
    description: 'Buy groceries',
    completed: false,
    index: 2,
  },
];

const taskList = () => {
  let content = '';
  tasks
    .sort((a, b) => a.index - b.index)
    .forEach((task) => {
      content += `
            <li class="task-list" id="toDo"><input type="checkbox" id="${task.description}"  value="task">${task.description}</li>
        `;
    });
  return content;
};

const rendering = () => document.getElementById('to-dos');

window.addEventListener('load', () => {
  const content = taskList();
  rendering().innerHTML = content;
});
