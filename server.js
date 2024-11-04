// server.js
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
    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false,
    };
    tasks.push(task);
    res.status(201).json(task);
});

// Endpoint untuk menghapus tugas
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({ message: 'Task deleted' });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
