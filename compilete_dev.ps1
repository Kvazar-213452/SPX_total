$let = Read-Host "Type"

if ($let -eq 0) {
    git add -A
    $name = Read-Host "Name"
    git commit -m $name
    git push
} elseif ($let -eq 1) {
    node-sass web/static/prefab/scss/main.scss web/static/css/main.css
    node-sass web/static/prefab/scss/global.scss web/static/css/global.css
} elseif ($let -eq 3) {
    go build -o main/main.exe -ldflags -H=windowsgui .
    ./main.exe
}