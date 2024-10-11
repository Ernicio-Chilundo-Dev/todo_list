// Selecionar elementos

const taskInput = document.getElementById("new-task")
const addTaskButton = document.getElementById("add-task")
const taskList = document.getElementById("task-list")

// funcao para adicionar uma nova funcao
function addTask() {
    const taskText = taskInput.value

    if (taskText == '') {
        alert("Please enter a task!")
        return;
    }

    const taskItem = document.createElement("li")
    taskItem.innerHTML = `${taskText}
    <button class="delete-btn">Delete</button>`;

    // Marcar como completado ao clicar
    taskItem.addEventListener("click", function () {
        taskItem.classList.toggle('completed');
    });

    //Remover tarefa

    const deleteButton = taskItem.querySelector(".delete-btn")
    deleteButton.addEventListener("click", function (event) {
        taskList.removeChild(taskItem)
        event.stopPropagation()
    })

    //Adicionar a tarefa a lista
    taskList.appendChild(taskItem)

    // Limpar input
    taskInput.value = ""
}

// Evento listiner para o botao de adicionar tarefa
addTaskButton.addEventListener("click", addTask)


//Adicionar tarefa ao pressionar Enter
taskInput.addEventListener("keypress", function (event) {
    if (event.key == 'Enter') {
        addTask()
    }
})