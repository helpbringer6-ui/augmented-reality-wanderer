const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Augmented Reality Hikers API! This API provides tools for creating AR experiences for hiking trails.');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});