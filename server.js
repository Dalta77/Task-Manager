const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Array untuk menyimpan tugas
let tasks = [];

// Endpoint untuk mendapatkan semua tugas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Endpoint untuk menambahkan tugas baru
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    // Validasi input
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    const task = {
        id: tasks.length + 1,
        title,
        description,
        completed: false,
    };

    tasks.push(task);
    res.status(201).json(task);
});

// Endpoint untuk menghapus tugas
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    // Validasi ID tugas
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task deleted' });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
