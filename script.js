const input = document.getElementById("text-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-li");

const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createNode(todo, index) {
  const li = document.createElement("li");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = todo.completed;

  const textSpan = document.createElement("span");
  textSpan.textContent = todo.text;
  textSpan.style.margin = "0 8px";

  if (todo.completed) {
    textSpan.style.textDecoration = "line-through";
  }

  textSpan.addEventListener("dblclick", () => {
    const newText = prompt("Edit Text", todo.text);

    if (newText !== null && newText.trim() !== "") {
      todo.text = newText.trim();
      textSpan.textContent = todo.text;
      saveTodo();
    }
  });

  checkBox.addEventListener("change", () => {
    todo.completed = checkBox.checked;
    textSpan.style.textDecoration = todo.completed ? "line-through" : "";

    saveTodo();
  });

  const delButton = document.createElement("button");
  delButton.textContent = "Delete";

  delButton.addEventListener("click", () => {
    todos.splice(index, 1);
    render();
    saveTodo();
  });

  li.appendChild(checkBox);
  li.appendChild(textSpan);
  li.appendChild(delButton);

  return li;
}
function addTodo() {
  const text = input.value.trim();
  if (!text) {
    return;
  }
  todos.push({
    text: text,
    completed: false,
  });
  input.value = "";

  saveTodo();
  render();
}
function render() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const node = createNode(todo, index);
    list.appendChild(node);
  });
}
addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
saveTodo();
render();
