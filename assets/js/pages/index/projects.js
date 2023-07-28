// Pega o projects e os botões para abrir e fechar
var projects = document.getElementById("projects");
var botaoOpen = document.getElementById("open");
var botaoClose = document.getElementById("close");

// Adiciona a classe mostrar no projects
botaoOpen.addEventListener("click", function() {
  projects.classList.add("mostrar");
});

// Remove a classe mostrar no projects
botaoClose.addEventListener("click", function() {
  projects.classList.remove("mostrar");
});