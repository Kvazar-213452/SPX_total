package main

import (
	"log"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
)

func home(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, filepath.Join("frontend", "templates", "index.html"))
}

func runExecutable() {
	cmd := exec.Command("core/shell_web.exe", "sorse", "400", "400", "<style>iframe{position: fixed;height: 100%;width: 100%;top: 0%;left: 0%;}</style><iframe src='https://www.youtube.com/watch?v=pU7N9pVCIl0' frameborder='0'></iframe>")
	if err := cmd.Run(); err != nil {
		log.Fatal(err)
	}
	os.Exit(0)
}

func main() {
	go runExecutable() // Запускаємо виконуваний файл у фоновому режимі

	// Обробник для кореневого HTML-файлу
	http.HandleFunc("/", home)

	// Обробник для статичних файлів у папці "frontend/static"
	fs := http.FileServer(http.Dir("frontend/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	log.Println("Server started on :3000")
	if err := http.ListenAndServe(":3000", nil); err != nil {
		log.Fatal(err)
	}
}
