const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const editForm = document.querySelector("#todo-edit");
const editInput = document.querySelector("#input-edit");
const todoList = document.querySelector("#todo-list");
const toolbarr = document.querySelector("#toolbar");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

let inputAntigo;

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text;
    }
  });
};

const savetodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("p");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const icones = document.createElement("div");
  icones.classList.add("todo");

  const finishBTN = document.createElement("button");
  finishBTN.classList.add("finish");
  finishBTN.innerHTML = '<i class="fa-solid fa-check"></i>';
  icones.appendChild(finishBTN);

  const ExcludeBTN = document.createElement("button");
  ExcludeBTN.classList.add("delete");
  ExcludeBTN.innerHTML = '<i class="fa-solid fa-x">';
  icones.appendChild(ExcludeBTN);

  const EditBTN = document.createElement("button");
  EditBTN.classList.add("edit");
  EditBTN.innerHTML = '<i class="fa-solid fa-pen">';
  icones.appendChild(EditBTN);

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

document.addEventListener("click", (e) => {
  const elementoBuscado = e.target;
  const parente = elementoBuscado.parentNode.parentNode;
  let todoTitle;

  if (parente && parente.querySelector("p")) {
    todoTitle = parente.querySelector("p").innerText;
  }

  if (elementoBuscado.classList.contains("finish")) {
    console.log("clicou pra finalizar");
    parente.classList.toggle("done");
  }
  if (elementoBuscado.classList.contains("delete")) {
    console.log("clicou pra excluir");
    parente.remove();
  }
  if (elementoBuscado.classList.contains("edit")) {
    console.log("clicou pra editar");
    toggleForms();
    editInput.value = todoTitle;
    inputAntigo = todoTitle;
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }

  toggleForms();
});
