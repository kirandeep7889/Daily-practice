const express = require('express');
const router = express.Router();
const tasksHandlers = require('../handlers/taskHandlers');

// Retrieve all tasks
router.get('/', tasksHandlers.getAllTasks);

// Retrieve a specific task by its ID
router.get('/:id', tasksHandlers.getTaskById);

// Create a new task
router.post('/', tasksHandlers.createTask);

// Update an existing task by its ID
router.put('/:id', tasksHandlers.updateTask);

// Update only the completed status of a task by its ID
router.patch('/:id', tasksHandlers.updateTaskCompleted);

// Delete a task by its ID
router.delete('/:id', tasksHandlers.deleteTask);

module.exports = router;
