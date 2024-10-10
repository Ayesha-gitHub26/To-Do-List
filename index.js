const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
    const newTask = newTaskInput.value.trim();

    if(newTask){
        const taskListItem = document.createElement('li');
        taskListItem.textContent = newTask;
        taskList.appendChild(taskListItem);
        newTaskInput.value = '';
    }
});

taskList.addEventListener("click", (event) => {
    if(event.target.tagName === 'LI'){
        event.target.style.textDecoration = 'line-through';
    }
});

newTaskInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        addTaskButton.click();
    }
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    taskList.innerHTML = '';
    newTaskInput.value = '';
    console.log("The page has been reset.");
})

/* using the remove child method;
resetButton.addEventListener("click"), () =>{
    while(taskList.firstChild){
        taskList.removeChild(firstChild);
        newTaskInput.value = '';
    }
});*/