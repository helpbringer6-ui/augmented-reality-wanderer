const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the AR Hikers API! Discover amazing augmented reality tools crafted to enhance your hiking adventures and immerse you in nature.');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});