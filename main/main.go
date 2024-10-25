package main

import (
	"os"
	"os/exec"
	"syscall"
)

func main() {
	cmd := exec.Command("./spx.exe")

	cmd.SysProcAttr = &syscall.SysProcAttr{
		HideWindow: true,
	}

	err := cmd.Start()
	if err != nil {
		os.Exit(1)
	}

	go func() {
		cmd.Wait()
	}()

	os.Exit(0)
}
