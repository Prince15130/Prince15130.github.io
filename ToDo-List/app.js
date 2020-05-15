const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const sortAsec = document.querySelector(".sort-az");
const sortDsec = document.querySelector(".sort-za");
const checkAll = document.querySelector(".checkAll");
const deleteAll = document.querySelector(".deleteAll");
const filterTodo = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
sortAsec.addEventListener("click", (event) => sortlist(event, false));
sortDsec.addEventListener("click", (event) => sortlist(event, true));
checkAll.addEventListener("click", checkAllFunc);
deleteAll.addEventListener("click", deleteAllFunc);
filterTodo.addEventListener("click", filterData);

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
  event.preventDefault();
  console.log("Inside addTodo");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("comp-btn");
  todoDiv.appendChild(completeButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trsh-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "trsh-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "comp-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function sortlist(event, descFlag) {
  event.preventDefault();
  const list = todoList.getElementsByTagName("li");
  var vals = [];
  for (var i = 0, l = list.length; i < l; i++) {
    vals.push(list[i].innerHTML);
  }
  vals.sort();
  if (descFlag) {
    vals.reverse();
  }

  for (var i = 0, l = list.length; i < l; i++) {
    list[i].innerHTML = vals[i];
  }
}

function checkAllFunc(e) {
  e.preventDefault();
  const buttonComp = todoList.getElementsByTagName("button");
  for (var i = 0, l = buttonComp.length; i < l; i++) {
    if (buttonComp[i].classList[0] === "comp-btn") {
      buttonComp[i].parentElement.classList.toggle("completed");
    }
  }
}
function deleteAllFunc(e) {
  e.preventDefault();
  const buttonTrash = todoList.getElementsByTagName("button");
  for (var i = 0, l = buttonTrash.length; i < l; i++) {
    if (buttonTrash[i].classList[0] === "trsh-btn") {
      const buttonParent = buttonTrash[i].parentElement;
      buttonParent.classList.add("fall");
      buttonParent.addEventListener("transitionend", function () {
        buttonParent.remove();
      });
    }
  }
}

function filterData(e) {
  const child = todoList.childNodes;
  child.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
