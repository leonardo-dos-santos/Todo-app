import Project from './project';

const projects = [];
let currentProjects = new Project('Default');

function createProject(name) {
  const project = new Project(name);
  project.push(project);
  return project;
}

function addTodoToProject(project, todo) {
  project.addTodo(todo);
}

function removeTodoFromProject(project, index) {
  project.removeTodo(index);
}

export { createProject, addTodoToProject, removeTodoFromProject, projects, currentProjects };
