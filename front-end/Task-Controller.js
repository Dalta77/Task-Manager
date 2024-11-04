function filterTasksByStatus(tasks, status) {
    return tasks.filter(task => task.status === status);
  }
  
  // Contoh endpoint untuk meng-handle filter tugas
  exports.getTasks = (req, res) => {
    const { status } = req.query;
    let tasks = getAllTasks(); // Misalnya, fungsi ini mengambil semua tugas dari database
  
    if (status) {
      tasks = filterTasksByStatus(tasks, status);
    }
  
    res.json(tasks);
  };
  