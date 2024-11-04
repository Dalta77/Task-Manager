document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push({ title, desc });
    localStorage.setItem('tasks', JSON.stringify(taskList));

    alert('Tugas berhasil disimpan!');
    document.getElementById('task-form').reset();
});
