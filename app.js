const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the AR Hikers API! Explore augmented reality tools designed specifically for enhancing your hiking experiences.');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});