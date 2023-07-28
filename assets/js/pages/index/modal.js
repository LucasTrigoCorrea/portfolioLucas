// Pega o modal e os botões para abrir e fechar
var modal = document.getElementById("modal");
var botaoAbrir = document.getElementById("abrir");
var botaoFechar = document.getElementById("fechar");

// Adiciona a classe mostrar no modal
botaoAbrir.addEventListener("click", function() {
  modal.classList.add("mostrar");
});

// Remove a classe mostrar no modal
botaoFechar.addEventListener("click", function() {
  modal.classList.remove("mostrar");
});