const { exec } = require('child_process');
const path = require('path');

function runShellWeb(PORT) {
    const exePath = path.join(process.cwd(), 'core', 'shell_web.exe');
    const command = `"${exePath}" sorse 400 400 "<style>iframe{position: fixed;height: 100%;width: 100%;top: 0%;left: 0%;}</style><iframe src='http://127.0.0.1:${PORT}/' frameborder='0'></iframe>"`;
    
    exec(command, () => {
        process.exit(0)
    });
}

module.exports = { runShellWeb };