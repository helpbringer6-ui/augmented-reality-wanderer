const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the AR Hikers API! This API offers tools for creating augmented reality experiences for hiking trails.');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});