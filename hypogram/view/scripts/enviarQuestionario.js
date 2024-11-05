import { voltar } from "../scripts/voltar.js";

export function enviarQuestionario() {
  const dadosQuestionario = JSON.parse(localStorage.getItem("questionario"));
  const questoes = dadosQuestionario.questoes;
  const form = document.querySelector("#form-questionario");
  const ol = form.querySelector("ol");
  form.addEventListener("submit", (event) => {
    let pontuacao = 0;
    let totalQuestoes = questoes.length;
    questoes.forEach((validador) => {
      const respostaUsuario = ol.querySelector(
        `input[name="alternativa${validador.id}"]:checked`
      );
      if (respostaUsuario) {
        const respostaUsuarioValor = respostaUsuario.id.includes("verdadeira");
        const respostaCorreta = validador.respostaCorreta;

        if (respostaUsuarioValor === respostaCorreta) {
          pontuacao++;
        }
      }
    });

    //Realizar inserção no banco

    alert(`Você acertou ${pontuacao} de ${totalQuestoes} questões.`);
    voltar();
    event.preventDefault();
  });
}
