import { createHeader } from "../components/header.js";
import { createFooter } from "../components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  createHeader();
  createFooter();
  const login = localStorage.getItem("login");
  setupEntrarSair(login);
  setupQuestionario(login);
});

function setupEntrarSair(login) {
  const entrarSair = document.querySelector("#entrarSair");
  localStorage.setItem("paginaAnterior", window.location.href);
  if (entrarSair) {
    entrarSair.addEventListener("click", () => {
      const paginaAnterior = localStorage.getItem("paginaAnterior");
      if (!login) {
        window.location.href = "./login.html";
      } else {
        localStorage.removeItem("login");
        /* window.history.back(); */
        window.location.href = paginaAnterior;
      }
    });
  }
}

function setupQuestionario(login) {
  const questionario = document.querySelector("section.questionario");
  if (!login) {
    questionario.style.display = 'none';
  }else{
    questionario.style.display = 'flex';
  }

}
