let tasks = [];

// add an event listener for Enter key on input
document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// add an event listener to add task button
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// add task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
    
    tasks.push({
        text: taskText,
        completed: false
    });
    
    taskInput.value = "";
    displayTasks();
}

// update task counter
function updateTaskCounter() {
    const counter = document.getElementById("taskCounter");
    counter.textContent = `Total Tasks: ${tasks.length}`;
}

// toggle task completion
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// ddisplay tasks
function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );
        
        if (task.completed) {
            li.classList.add("completed");
        }
        
        li.innerHTML = `
            <span onclick="toggleComplete(${index})">${task.text}</span>
            <button class="btn btn-danger btn-sm" onclick="removeTask(${index})">✓</button>
        `;
        
        taskList.appendChild(li);
    });
    
    updateTaskCounter();
}

// remove tasks
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Event listener for clear task button
document.getElementById("clearTaskBtn").addEventListener("click", function() {
    tasks = [];
    displayTasks();
});