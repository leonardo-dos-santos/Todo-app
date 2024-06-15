import { displayProjects, displayTodos } from "./dom";
import { createProject, addTodoToProject, projects, currentProject } from "./appLogic";
import Todo from './todo';

// Initial setup
displayProjects();
displayTodos(currentProject);

// Event listeners for adding projects and todos
document.getElementById('addProjectButton').addEventListener('click', () => {
  const projectName = prompt('Enter project name: ');
  const project = createProject(projectName);
  displayProjects();
});

document.getElementById('addTodoButton').addEventListener('click', () => {
  const title = prompt('Enter todo title:');
  const description = prompt('Enter todo description:');
  const dueDate = prompt('Enter todo due date:');
  const priority = prompt('Enter todo priority:');
  const todo = new Todo(title, description, dueDate, priority);
  addTodoToProject(currentProject, todo);
  displayTodos(currentProject);
});