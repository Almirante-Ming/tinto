const express = require('express');
const tinto = express();
const port = 3101;

tinto.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
});

tinto.get('/notes/new', (req,res) => {
    res.sendFile(__dirname + '/views/new_note.html')
});

tinto.listen(port, () => console.log(`Server running on port ${port}`));
