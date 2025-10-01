const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Willkommen bei der API für Augmented-Reality-Wanderer!');
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});