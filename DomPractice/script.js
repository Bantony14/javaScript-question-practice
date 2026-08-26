const title = document.querySelector("#title");
const todoInput = document.querySelector("#todoInput");
const allTodo = document.querySelectorAll(".todo");
const todoList = document.querySelector("#todoList");
const changeBtn = document.querySelector("#changeBtn");
const focusBtn = document.querySelector("#focusBtn");
const toggleBtn = document.querySelector("#toggleBtn");
const todo = document.querySelector(".todo");
const addBtn = document.querySelector("#addBtn");

console.log(todoList);

title.classList.add("title2");
console.log(title.classList.contains("title2"));

todoInput.addEventListener("input", (e) => {
  console.log(e.target.value);

  //   todoInput.value = "";
});

changeBtn.addEventListener("click", () => {
  title.textContent = "hello bantony";
});

focusBtn.addEventListener("click", () => {
  todoInput.focus();
});

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  console.log(toggleBtn.classList.contains("active"));
  console.log(toggleBtn);
});

console.log(todo.parentElement);
console.log(todoList.children);

console.log(todo.previousElementSibling);
console.log(todo.nextElementSibling);

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const crtEl = document.createElement("li");

  crtEl.classList.add("todo3");
  crtEl.textContent = todoInput.value;
  todoList.append(crtEl);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "deleteTodo";
  deleteBtn.classList.add("deleteTodo");
  crtEl.append(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.remove();
  });
});

todoList.addEventListener("click", (event) => {
  console.log(event.target);
});
