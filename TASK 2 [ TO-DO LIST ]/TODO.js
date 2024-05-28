document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const taskText = newTaskInput.value.trim();
            if (taskText) {
                addTask(taskText);
                newTaskInput.value = '';
            }
        }
    });

    function addTask(text) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${text}</span>
            <button>Remove</button>
        `;
        taskList.appendChild(taskItem);

        const removeButton = taskItem.querySelector('button');
        removeButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });
    }
});
