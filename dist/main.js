/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoToProject: () => (/* binding */ addTodoToProject),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   currentProject: () => (/* binding */ currentProject),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   removeTodoFromProject: () => (/* binding */ removeTodoFromProject)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\n// Initialize projects from localStorage\r\nconst projects = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.loadFromLocalStorage)();\r\nlet currentProject = projects.length ? projects[0] : new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Default');\r\n\r\nfunction createProject(name) {\r\n  const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\r\n  projects.push(project);\r\n  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);\r\n  return project;\r\n}\r\n\r\nfunction addTodoToProject(project, todo) {\r\n  project.addTodo(todo);\r\n  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);\r\n}\r\n\r\nfunction removeTodoFromProject(project, index) {\r\n  project.removeTodo(index);\r\n  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-to-do-list/./src/appLogic.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects),\n/* harmony export */   displayTodos: () => (/* binding */ displayTodos)\n/* harmony export */ });\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\r\n\r\n\r\nfunction displayProjects() {\r\n  // Code to display projects in the UI\r\n  const projectsDiv = document.getElementById('projects');\r\n  projectsDiv.innerHTML = '';\r\n  _appLogic__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project, index) => {\r\n  const projectElement = document.createElement('div');\r\n  projectElement.textContent = project.name;\r\n  projectElement.addEventListener('click', () => {\r\n  displayTodos(project);\r\n  });\r\n  projectsDiv.appendChild(projectElement);\r\n  });\r\n}\r\n\r\nfunction displayTodos(project) {\r\n  // Code to display todos in the UI\r\n  const todosDiv = document.getElementById('todos');\r\n  todosDiv.innerHTML = '';\r\n  project.getTodos().forEach((todo, index) => {\r\n  const todoElement = document.createElement('div');\r\n  todoElement.textContent = `${todo.title} - ${todo.dueDate}`;\r\n  todoElement.addEventListener('click', () => {\r\n  // Code to expand and edit the todo details\r\n  });\r\n  todosDiv.appendChild(todoElement);\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://project-to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n// src/index.js\r\n\r\n\r\n\r\n\r\n// Initial setup\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\r\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_appLogic__WEBPACK_IMPORTED_MODULE_1__.currentProject);\r\n\r\n// Event listeners for adding projects and todos\r\ndocument.getElementById('addProjectButton').addEventListener('click', () => {\r\n  const projectName = prompt('Enter project name:');\r\n  if (projectName) {\r\n    const project = (0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectName);\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\r\n  }\r\n});\r\n\r\ndocument.getElementById('addTodoButton').addEventListener('click', () => {\r\n  const title = prompt('Enter todo title:');\r\n  const description = prompt('Enter todo description:');\r\n  const dueDate = prompt('Enter todo due date:');\r\n  const priority = prompt('Enter todo priority:');\r\n  const todo = new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](title, description, dueDate, priority);\r\n  (0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.addTodoToProject)(_appLogic__WEBPACK_IMPORTED_MODULE_1__.currentProject, todo);\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_appLogic__WEBPACK_IMPORTED_MODULE_1__.currentProject);\r\n});\r\n\r\n// Load saved projects on initialization\r\nwindow.onload = () => {\r\n  if (_appLogic__WEBPACK_IMPORTED_MODULE_1__.projects.length === 0) {\r\n  (0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.createProject)('Default');\r\n  }\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_appLogic__WEBPACK_IMPORTED_MODULE_1__.currentProject);\r\n};\n\n//# sourceURL=webpack://project-to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.todos = [];\r\n  }\r\n\r\n  addTodo(todo) {\r\n    this.todos.push(todo);\r\n  }\r\n\r\n  removeTodo(index) {\r\n    this.todos.splice(index, 1);\r\n  }\r\n\r\n  getTodos() {\r\n    return this.todos;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://project-to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n// src/storage.js\r\nfunction saveToLocalStorage(projects) {\r\n  localStorage.setItem('projects', JSON.stringify(projects));\r\n}\r\n\r\nfunction loadFromLocalStorage() {\r\n  const data = localStorage.getItem('projects');\r\n  return data ? JSON.parse(data) : [];\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-to-do-list/./src/storage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass Todo {\r\n  constructor(title, description, dueDate, priority, notes = '', checklist = []){\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.notes = notes;\r\n    this.checklist = checklist;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://project-to-do-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;