import { saveToLocalStorage, loadFromLocalStorage } from './storage';
import Project from './project';

// Initialize projects from localStorage
const projects = loadFromLocalStorage();
let currentProject = projects.length ? projects[0] : new Project('Default');

function createProject(name) {
  const project = new Project(name);
  projects.push(project);
  saveToLocalStorage(projects);
  return project;
}

function addTodoToProject(project, todo) {
  project.addTodo(todo);
  saveToLocalStorage(projects);
}

function removeTodoFromProject(project, index) {
  project.removeTodo(index);
  saveToLocalStorage(projects);
}

export { createProject, addTodoToProject, removeTodoFromProject, projects, currentProject };
