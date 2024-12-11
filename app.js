const express = require('express');
const tinto = express();
const port = 3101;

tinto.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
});
tinto.get('/teste', (req,res) => {
    res.send('it`s works')
});

tinto.get('/notes/new', (req,res) => {
    res.sendFile(__dirname + '/views/new_note.html')
});

tinto.get('/notes/closed', (req, res) =>{
    res.sendFile(__dirname+'/view/append.html')
});

tinto.get('/tasks/new', (req, res) => {
    res.sendFile(__dirname+'/views/new_task.html')
});


tinto.listen(port, () => console.log(`Server running on port ${port}`));