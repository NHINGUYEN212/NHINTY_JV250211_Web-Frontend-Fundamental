let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

window.onload = function () {
  renderTodoList();
};

function addTodo() {
  let task = document.getElementById("todo-input").value.trim();
  if (!task) {
    alert("Vui lòng nhập công việc!");
    return;
  }
  let id = todos.length ? todos[todos.length - 1].id + 1 : 1;
  let todo = {
    id: id,
    task: task,
  };
  todos.push(todo);
  saveToLocalStorage();
  renderTodoList();
  document.getElementById("todo-input").value = "";
}

function renderTodoList(list = todos) {
  let str = list.map((todo, index) => `
    <li class="todo-item">${todo.task}
        <div class="button-group">
            <button class="edit-btn" onclick="editTodo(${index})">✏️</button>
            <button class="delete-btn" onclick="deleteTodo(${index})">🗑</button>
        </div>
    </li>`
    ).join("");
  document.getElementById("todo-list").innerHTML = str;
  let taskCount = document.getElementById("task-count");
  if (taskCount) {
    taskCount.innerText = `You have ${todos.length} pending tasks`;
  }
}

function editTodo(index) {
  let newTask = prompt("Nhập tên chỉnh sửa", todos[index].task);
  if (newTask !== null) {
    todos[index].task = newTask.trim() || todos[index].task;
    saveToLocalStorage();
    renderTodoList();
  }
}

function deleteTodo(index) {
  if (confirm("Bạn có muốn xóa hay không?")) {
    todos.splice(index, 1);
  }
  saveToLocalStorage();
  renderTodoList();
}

function clearAllTodos() {
  if (todos.length === 0) return;
  if (confirm("Bạn có chắc chắn muốn xóa tất cả?")) {
    todos = [];
  }
  saveToLocalStorage();
  renderTodoList();
}
