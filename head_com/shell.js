const { mas_config } = require('./config.js');

const { exec } = require('child_process');
const path = require('path');
const net = require('net');

function run_shell(PORT) {
    const exePath = path.join(mas_config['global_phat'], 'core', 'shell_web.exe');
    const command = `"${exePath}" sorse 400 400 "<style>iframe{position: fixed;height: 100%;width: 100%;top: 0%;left: 0%;}</style><iframe src='http://127.0.0.1:${PORT}/' frameborder='0'></iframe>"`;
    
    exec(command, () => {
        process.exit(0)
    });
}

const getRandomPort = () => {
    return Math.floor(Math.random() * (65535 - 1024 + 1)) + 1024;
};

const isPortTaken = (port) => {
    return new Promise((resolve) => {
        const server = net.createServer();
        server.once('error', () => resolve(true));
        server.once('listening', () => {
            server.close(() => resolve(false));
        });
        server.listen(port);
    });
};

const find_port = async () => {
    let port;
    do {
        port = getRandomPort();
    } while (await isPortTaken(port));
    return port;
};

module.exports = { run_shell, find_port };