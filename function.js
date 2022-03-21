const todoInput = document.querySelector(".to-do-task");
const todoButton = document.querySelector(".main-btn");
const todoList = document.querySelector(".task-list");

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteAndComplete);

function addTodo(event){

    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("to-do-inner");

    const deleteTask = document.createElement('button');
    deleteTask.innerText = "delete-task :)";
    deleteTask.classList.add("delete-task");
    todoDiv.appendChild(deleteTask);

    const newTodo = document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("to-do-tems");
    todoDiv.appendChild(newTodo);

    const completeTask = document.createElement('button');
    completeTask.innerText = "Complete :)";
    completeTask.classList.add("complete-task");
    todoDiv.appendChild(completeTask);

    todoList.appendChild(todoDiv);

    todoInput.value="";
}

function deleteAndComplete(event){
    const clickedTarget = event.target;
    console.log(clickedTarget);

    if (clickedTarget.classList[0] === "delete-task"){
        console.log(clickedTarget.classList);
        const innerTodo = clickedTarget.parentElement;
        innerTodo.remove();
    }

    if (clickedTarget.classList[0] === "complete-task");{
        const innerTodo = clickedTarget.parentElement;
        innerTodo.classList.toggle("completed")
    }
}

