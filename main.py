import subprocess
import sys

def run_executable():
    process = subprocess.Popen(['core/shell_web.exe', 'sorse', '400', '400', "<style>iframe{position: fixed;height: 100%%;width: 100%%;top: 0%%;left: 0%%;}</style><iframe src='https://www.youtube.com/watch?v=pU7N9pVCIl0' frameborder='0'></iframe>"])
    
    process.wait()

    sys.exit()

run_executable()