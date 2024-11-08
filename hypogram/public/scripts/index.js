import { createHeader } from "/components/header.js";
import { createFooter } from "/components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  createHeader();
  createFooter();
  const login = localStorage.getItem("login");
  setupEntrarSair(login);
  setupQuestionario(login);
  setupCadastro(login);
});

function setupEntrarSair(login) {
  const entrarSair = document.querySelector("#entrarSair");
  if (entrarSair) {
    localStorage.setItem("paginaAnterior", window.location.href);
    entrarSair.addEventListener("click", () => {
      const paginaAnterior = localStorage.getItem("paginaAnterior");
      if (!login) {
        window.location.href = "/login";
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
  if (questionario) {
    if (!login) {
      questionario.style.display = "none";
    } else {
      questionario.style.display = "flex";
    }
  }
}

function setupCadastro(login) {
  const cadastro = document.querySelector("#botao-inscreva");

  if (cadastro) {
    if (login) {
      cadastro.style.display = "none";
    } else {
      cadastro.style.display = "flex";
    }
  }
}
