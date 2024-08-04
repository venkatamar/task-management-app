let tasks = [];

function addTask() {
    const taskDescription = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('dueDate').value;

    if (taskDescription === '') {
        alert('Please enter a task description.');
        return;
    }

    const task = {
        description: taskDescription,
        dueDate: dueDate,
        status: 'pending'
    };

    tasks.push(task);
    renderTasks();
    document.getElementById('taskDescription').value = '';
    document.getElementById('dueDate').value = '';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTaskStatus(index) {
    tasks[index].status = tasks[index].status === 'pending' ? 'completed' : 'pending';
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.toggle('completed', task.status === 'completed');

        const taskContent = document.createElement('span');
        taskContent.innerHTML = `${task.description} (Due: ${task.dueDate})`;

        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.status === 'pending' ? 'Complete' : 'Undo';
        toggleButton.addEventListener('click', () => toggleTaskStatus(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        taskItem.appendChild(taskContent);
        taskItem.appendChild(toggleButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    });
}

renderTasks();
