const { run_shell, find_port } = require('./head_com/shell.js');
const { mas_config } = require('./head_com/config.js');

const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(mas_config['global_phat'], 'frontend/templates'));

const start_server = async () => {
    let port = null;

    if (mas_config['access_post']) {
        port = await find_port();
    } else {
        port = mas_config['port'];
    }

    app.get('/', (req, res) => {
        res.render('index');
    });

    app.use('/static', express.static(path.join(mas_config['global_phat'], 'frontend/static')));

    run_shell(port);

    app.listen(port, () => {
        console.log(`Сервер запущено на порту ${port}`);
    });
};

start_server();