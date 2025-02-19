const addBtn = document.getElementById("addButton");
const input = document.getElementById("todoInput");
const ul = document.getElementById("todoList");
const BASE_URL = "https://84d2d670570293c3.mokky.dev/todolist";

// Получаем задачи из localStorage
function getSavedTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

// Сохраняем задачи в localStorage
function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Инициализация задач при загрузке страницы
const initTodos = async () => {
  const data = await requestWithErrorHandling(BASE_URL, "GET");
  const savedTodos = getSavedTodos();

  if (data) {
    const todos = data.map((todo) => ({
      ...todo,
      completed:
        savedTodos.find((savedTodo) => savedTodo.id === todo.id)?.completed ||
        false,
    }));
    saveTodos(todos); // Сохраняем полученные задачи в localStorage
    renderTodos(todos);
  }
};

// Добавление новой задачи
addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue !== "") {
    const newTodo = {
      id: Date.now().toString(),
      title: inputValue,
      completed: false,
    };
    postTodo(newTodo);
    input.value = "";
  } else {
    alert("Заполните поле!");
  }
});

// Отправка новой задачи на сервер
async function postTodo(todo) {
  await requestWithErrorHandling(BASE_URL, "POST", todo);
  initTodos();
}

// Отображение задач
function renderTodos(todoArray) {
  ul.innerHTML = "";
  todoArray.forEach((item) => {
    const li = document.createElement("li");

    // Устанавливаем стиль в зависимости от состояния выполнения
    li.style.textDecoration = item.completed ? "line-through" : "none";
    li.style.textDecorationColor = "red";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.addEventListener("change", () => toggleTodoCompletion(item));

    li.appendChild(checkbox);

    const title = document.createElement("span");
    title.textContent = item.title;
    li.appendChild(title);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.addEventListener("click", () => deleteTodo(item.id));

    const updateBtn = document.createElement("button");
    updateBtn.innerText = "REFRESH";
    updateBtn.addEventListener("click", () => updateTodo(item));

    li.append(deleteBtn, updateBtn);
    ul.appendChild(li);
  });
}

// Переключение состояния выполнения задачи
const toggleTodoCompletion = async (todo) => {
  todo.completed = !todo.completed;

  // Обновляем задачу на сервере
  await requestWithErrorHandling(`${BASE_URL}/${todo.id}`, "PATCH", {
    completed: todo.completed,
  });

  // Получаем актуальный список задач из localStorage
  const todos = getSavedTodos();

  // Сохраняем обновленное состояние
  saveTodos(todos.map((t) => (t.id === todo.id ? todo : t)));

  // Перерисовываем список с учётом обновленного состояния
  renderTodos(getSavedTodos());
};

// Удаление задачи
const deleteTodo = async (id) => {
  await requestWithErrorHandling(`${BASE_URL}/${id}`, "DELETE");
  initTodos();
};

// Обновление задачи
const updateTodo = async (todo) => {
  const newTitle = prompt("Enter the new value:", todo.title);
  if (newTitle !== null && newTitle.trim() !== "") {
    await requestWithErrorHandling(`${BASE_URL}/${todo.id}`, "PATCH", {
      title: newTitle,
    });
    initTodos();
  }
};

// Функция для обработки запросов с обработкой ошибок
async function requestWithErrorHandling(url, method, body) {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (body) options.body = JSON.stringify(body);

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("ERROR"`${response.status}`);

    return method === "GET" ? await response.json() : null;
  } catch (error) {
    alert("Error!"`${error.message}`);
    console.error(error);
  }
}

// Получаем список задач при загрузке страницы
initTodos();
