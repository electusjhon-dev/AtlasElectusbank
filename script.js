document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const status = document.getElementById("status");

  btn.addEventListener("click", () => {
    status.textContent = "Aplicação carregada e JavaScript funcionando.";
  });

  // mensagem inicial
  status.textContent = "Pronto para publicar no GitHub Pages.";
});
