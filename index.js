const express = require('express');
const { runShellWeb } = require('./head_com/shell.js');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'frontend/templates/index.html'));
});

app.use('/static', express.static(path.join(process.cwd(), 'frontend', 'static')));

runShellWeb(PORT);

app.listen(PORT, () => {
    console.log(`Сервер запущено на порту ${PORT}`);
});