// src/storage.js
function saveToLocalStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function loadFromLocalStorage() {
  const data = localStorage.getItem('projects');
  return data ? JSON.parse(data) : [];
}

export { saveToLocalStorage, loadFromLocalStorage };
