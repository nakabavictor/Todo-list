const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

const savetodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("p");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const icones = document.createElement("div");
  icones.classList.add("icones");

  const finishBTN = document.createElement("button");
  finishBTN.classList.add("finish");
  finishBTN.innerHTML = '<i class="fa-solid fa-check"></i>';
  icones.appendChild(finishBTN);

  const editBTN = document.createElement("button");
  editBTN.classList.add("finish");
  editBTN.innerHTML = '<i class="fa-solid fa-pen"></i>';
  icones.appendChild(editBTN);

  const ExcludeBTN = document.createElement("button");
  ExcludeBTN.classList.add("finish");
  ExcludeBTN.innerHTML = ' <i class="fa-solid fa-x">';
  icones.appendChild(ExcludeBTN);
  todo.appendChild(icones);

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();
};

//EVENTOS

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;
  if (inputValue) {
    console.log(inputValue);
    savetodo(inputValue);
  }
});

document.addEventListener("click", (e) => {});
