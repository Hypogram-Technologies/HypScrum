import { voltar } from "/scripts/voltar.js";

export function enviarQuestionario() {
  const dadosQuestionario = JSON.parse(localStorage.getItem("questionario"));
  const questoes = dadosQuestionario.questoes;
  const form = document.querySelector("#form-questionario");
  const ol = form.querySelector("ol");
  const checkIcons = document.querySelectorAll("#check-icon");
  const xIcons = document.querySelectorAll("#x-icon");
  const modal = document.querySelector("#modal-resultado");
  const modalContent = modal.querySelector(".modal-content");
  const modalTitulo = document.querySelector("#resultado-titulo");
  const modalMensagem = document.querySelector("#resultado-mensagem");
  const botoes = document.querySelector(".botoes");
  const botaoEnviar = document.querySelector("#button-enviar");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let pontuacao = 0;
    let totalQuestoes = questoes.length;
    questoes.forEach((validador, index) => {
      const respostaUsuario = ol.querySelector(
        `input[name="alternativa${validador.id}"]:checked`
      );
      if (respostaUsuario) {
        const respostaUsuarioValor = respostaUsuario.id.includes("verdadeira");
        const respostaCorreta = validador.respostaCorreta;
        checkIcons[index].style.display = "inline";
        xIcons[index].style.display = "none";

        if (respostaUsuarioValor === respostaCorreta) {
          pontuacao++;
        } else {
          checkIcons[index].style.display = "none";
          xIcons[index].style.display = "inline";
        }
      }
    });

    const aprovado = pontuacao >= 2;

    if (aprovado) {
      modalTitulo.textContent = "Aprovado!";
      modalMensagem.textContent =
        "Parabéns, você foi aprovado no questionário!";
      modalContent.classList.remove("reprovado");
      modalContent.classList.add("aprovado");
      botaoEnviar.style.display = "none";
      botoes.classList.add("centralizado");
    } else {
      modalTitulo.textContent = "Reprovado!";
      modalMensagem.textContent =
        "Infelizmente, você não foi aprovado. Tente novamente!";
      modalContent.classList.remove("aprovado");
      modalContent.classList.add("reprovado");
      botaoEnviar.style.display = "inline-block";
      botoes.classList.remove("centralizado");
    }

    modal.style.display = "flex";

    setTimeout(() => {
      modal.classList.add("fade-out");
    }, 3000);

    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
    }, 4000);

    //Realizar inserção no banco
  });
}
