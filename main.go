package main

import (
	shell "head/head_com"
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "frontend/templates/index.html")
}

func main() {
	go shell.Run_shell_web()

	http.HandleFunc("/", home)

	fs := http.FileServer(http.Dir("frontend/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	log.Println("Server started on :3000")
	http.ListenAndServe(":3000", nil)
}
