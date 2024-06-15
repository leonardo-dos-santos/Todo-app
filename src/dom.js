import { createProject, addTodoToProject, removeTodoFromProject, projects, currentProjects } from './appLogic'
import Todo from './todo';
import { projects, currentProject } from './appLogic';

function displayProjects() {
  // Code to display projects in the UI
  const projectsDiv = document.getElementById('projects');
  projectsDiv.innerHTML = '';
  projects.forEach((project, index) => {
  const projectElement = document.createElement('div');
  projectElement.textContent = project.name;
  projectElement.addEventListener('click', () => {
  displayTodos(project);
  });
  projectsDiv.appendChild(projectElement);
  });
}

function displayTodos(project) {
  // Code to display todos in the UI
  const todosDiv = document.getElementById('todos');
  todosDiv.innerHTML = '';
  project.getTodos().forEach((todo, index) => {
  const todoElement = document.createElement('div');
  todoElement.textContent = ${todo.title} - ${todo.dueDate};
  todoElement.addEventListener('click', () => {
  // Code to expand and edit the todo details
  });
  todosDiv.appendChild(todoElement);
  });
}

export { displayProjects, displayTodos };