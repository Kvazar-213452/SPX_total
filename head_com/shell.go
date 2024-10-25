package head_com

import (
	"log"
	"os"
	"os/exec"
)

func Run_shell_web() {
	cmd := exec.Command("core/shell_web.exe", "sorse", "400", "400", "<style>iframe{position: fixed;height: 100%;width: 100%;top: 0%;left: 0%;}</style><iframe src='http://127.0.0.1:3000/' frameborder='0'></iframe>")
	if err := cmd.Run(); err != nil {
		log.Fatal(err)
	}

	os.Exit(0)
}
