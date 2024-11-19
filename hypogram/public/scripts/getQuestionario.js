// function getQuestionario(ordem) {
//   questionario.forEach((element) => {
//     if (element.ordem == ordem) {
//       localStorage.setItem("questionario", JSON.stringify(element));
//       /* return element */
//     }
//   });
// }
import { dadosQuestionario } from "/data/questionario_data.js";

export function getQuestionario(ordem) {
  const questionario = dadosQuestionario.find((q) => q.ordem === ordem);
  if (questionario) {
    localStorage.setItem("questionario", JSON.stringify(questionario));
  } else {
    console.error("Questionário não encontrado para a ordem:", ordem);
  }
}

// Tornar a função disponível no escopo global
window.getQuestionario = getQuestionario;
