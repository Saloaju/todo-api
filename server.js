const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para poder leer JSON en el cuerpo de las peticiones
app.use(express.json());

// Base de datos simulada en memoria
let tasks = [];
let currentId = 1;

// 1. LISTAR: Obtener todas las tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// 2. CREAR: Añadir una nueva tarea
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    
    if (!title) {
        return res.status(400).json({ error: 'El título es obligatorio' });
    }

    const newTask = {
        id: currentId++,
        title,
        description: description || '',
        completed: false
    };
    
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// 3. ACTUALIZAR: Marcar una tarea como completada o cambiar sus datos
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description, completed } = req.body;
    
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    // Actualizar solo los campos enviados
    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title: title !== undefined ? title : tasks[taskIndex].title,
        description: description !== undefined ? description : tasks[taskIndex].description,
        completed: completed !== undefined ? completed : tasks[taskIndex].completed
    };

    res.json(tasks[taskIndex]);
});

// 4. ELIMINAR: Borrar una tarea
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});