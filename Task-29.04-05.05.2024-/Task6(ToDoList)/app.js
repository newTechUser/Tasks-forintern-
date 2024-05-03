let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

displayTasks();

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        taskInput.value = '';
    }
}
function deleteTasks(){
    localStorage.removeItem('tasks');
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ""
    tasks = []
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;

        if (task.completed) {
            listItem.classList.add('completed');
        }

        listItem.addEventListener('click', function() {
            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
        });
        listItem.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
        });

        taskList.appendChild(listItem);
    });
}
