import { voltar } from "../scripts/voltar.js";

export function enviarQuestionario() {
  const dadosQuestionario = JSON.parse(localStorage.getItem("questionario"));
  const questoes = dadosQuestionario.questoes;
  const form = document.querySelector("#form-questionario");
  const ol = form.querySelector("ol");
  const checkIcons = document.querySelectorAll("#check-icon");
  const xIcons = document.querySelectorAll("#x-icon");
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

    //Realizar inserção no banco
/*     setTimeout(() => {
      voltar();
    }, 4000); */
  });
}
