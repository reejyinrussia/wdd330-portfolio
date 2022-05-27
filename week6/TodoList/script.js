const todoInput = document.querySelector(".todoInput input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".clearBtn"),
addTodo = document.querySelector(".addBtn"),
todoBox = document.querySelector(".todoBox");

let editId,
todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    });
});

function showTodo(filter) {
    let listTag = "";
    if(todos) {
        todos.forEach((todo, id) => {
            let completed = todo.status == "completed" ? "checked" : "";
            if(filter == todo.status || filter == "all") {
                listTag += `<li class="todo">
                            <label for="${id}">
                                <input onclick="updateTodo(this)" type="checkbox" id="${id}" ${completed}>
                                <p class="${completed}">${todo.name}</p>
                            </label>
                            <div class="settings">
                                <i onclick='deleteTodo(${id}, "${filter}")'><i class="uil uil-trash"></i></i>
                                
                            </div>
                        </li>`;
            }
        });
    }
    todoBox.innerHTML = listTag || `<span>No current todos</span>`;
    let checkTodo = todoBox.querySelectorAll(".todo");
    !checkTodo.length ? clearAll.classList.remove("active") : clearAll.classList.add("active");
    todoBox.offsetHeight >= 300 ? todoBox.classList.add("overflow") : todoBox.classList.remove("overflow");
}
showTodo("all");

function showMenu(selectedTodo) {
    let menuDiv = selectedTodo.parentElement.lastElementChild;
    menuDiv.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != selectedTodo) {
            menuDiv.classList.remove("show");
        }
    });
}

function updateTodo(selectedTodo) {
    let todoName = selectedTodo.parentElement.lastElementChild;
    if(selectedTodo.checked) {
        todoName.classList.add("checked");
        todos[selectedTodo.id].status = "completed";
    } else {
        todoName.classList.remove("checked");
        todos[selectedTodo.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos))
}

function deleteTodo(deleteId, filter) {
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo(filter);
}

clearAll.addEventListener("click", () => {
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo()
});

todoInput.addEventListener("keyup", e => {
    let userTodo = todoInput.value.trim();
    if(e.key == "Enter" && userTodo) {
        
        todos = !todos ? [] : todos;
        let todoInfo = {name: userTodo, status: "pending"};
        todos.push(todoInfo);     
        todoInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo(document.querySelector("span.active").id);
    }
});

addTodo.addEventListener("click", () => {
    let userTodo = todoInput.value.trim();
    todos = !todos ? [] : todos;
    let todoInfo = { name: userTodo, status: "pending" };
    todos.push(todoInfo);
    todoInput.value = "";
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo(document.querySelector("span.active").id);
})