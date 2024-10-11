// Selecionar elementos

const taskInput = document.getElementById("new-task")
const addTaskButton = document.getElementById("add-task")
const taskList = document.getElementById("task-list")

// funcao para adicionar uma nova funcao
function addTask(){
    const taskText = taskInput.value

    if(taskText == ''){
        alert("Please enter a task!")
        return;
    }

    const taskItem = document.createElement("li")
    taskItem.innerHTML = `${taskText}
    <button class="delete-btn">Delete</button>`;
}