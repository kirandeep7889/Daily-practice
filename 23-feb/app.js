// app.js
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;

app.use(express.json());

// Read data from JSON file
const readData = () => {
    const jsonData = fs.readFileSync('data.json', 'utf8');
    return JSON.parse(jsonData);
}

// Write data to JSON file
const writeData = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 4), 'utf8');
}

// GET route
app.get('/data', (req, res) => {
    const data = readData();
    res.json(data);
});

// GET single record by ID
app.get('/data/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const record = data.find(item => item.id === id);
    if (record) {
        res.json(record);
    } else {
        res.status(404).json({ message: 'Record not found' });
    }
});


// POST route
app.post('/data', (req, res) => {
    const data = readData();
    const newData = req.body;
    if (!newData.id || !newData.name) {
        return res.status(400).json({ message: 'ID and Name are required' });
    }
    data.push(newData);
    writeData(data);
    res.status(201).json({ message: 'Record added successfully' });
});

// PUT route
app.put('/data/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const recordIndex = data.findIndex(item => item.id === id);
    if (recordIndex === -1) {
        return res.status(404).json({ message: 'Record not found' });
    }
    const updatedData = req.body;
    if (!updatedData.name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    data[recordIndex] = { ...data[recordIndex], ...updatedData };
    writeData(data);
    res.json({ message: 'Record updated successfully' });
});

// DELETE route
app.delete('/data/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const newData = data.filter(item => item.id !== id);
    if (data.length === newData.length) {
        return res.status(404).json({ message: 'Record not found' });
    }
    writeData(newData);
    res.json({ message: 'Record deleted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
