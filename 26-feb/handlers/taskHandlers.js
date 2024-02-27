const { v4: uuidv4 } = require('uuid');
let tasks = require('../sampleData/tasks.json');
const fs = require('fs');

// Retrieve all tasks
const getAllTasks = (req, res) => {
  res.json(tasks);
};

// Retrieve a specific task by its ID
const getTaskById = (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
};

// Create a new task
const createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const newTask = {
    id: uuidv4(),
    title,
    description,
    completed: false
  };

  tasks.push(newTask);
  updateTasksFile();
  res.status(201).json(newTask);
};

// Update an existing task by its ID
const updateTask = (req, res) => {
  const taskId = req.params.id;
  const { title, description, completed } = req.body;

  if (!title || !description || completed === undefined) {
    return res.status(400).json({ error: 'Title, description, and completed status are required' });
  }

  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[taskIndex] = { ...tasks[taskIndex], title, description, completed };
  updateTasksFile();
  res.json(tasks[taskIndex]);
};

// Update only the completed status of a task by its ID
const updateTaskCompleted = (req, res) => {
  const taskId = req.params.id;
  const { completed } = req.body;

  if (completed === undefined) {
    return res.status(400).json({ error: 'Completed status is required' });
  }

  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[taskIndex].completed = completed;
  updateTasksFile();
  res.json(tasks[taskIndex]);
};

// Delete a task by its ID
const deleteTask = (req, res) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  updateTasksFile();
  res.sendStatus(204);
};

// Update tasks.json file with current tasks array
const updateTasksFile = () => {
  fs.writeFileSync('./sampleData/tasks.json', JSON.stringify(tasks, null, 2), 'utf8');
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  updateTaskCompleted,
  deleteTask
};
