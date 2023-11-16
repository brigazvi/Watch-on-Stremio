const imdbId = document.URL.slice(document.URL.indexOf("tt"))
const a = document.createElement("a")
a.id = "watchOnStremioWrapper"
a.href = document.body.append(a)

const button = document.createElement("button")
button.innerText = "Watch on Stremio"
button.id = "watchOnStremioButton"
a.append(button)
