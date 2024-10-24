import { createQuestionario } from "../components/questionario.js";

const btnQuestionario = document.querySelector("button");
const body = document.body;
btnQuestionario.addEventListener("click", () => {
  let corDesfoque = "rgba(0, 0, 0, 0.6)";
  const container = document.querySelector(".container");
  if (container) {
    container.style.backgroundColor = corDesfoque;
  } else {
    body.style.backgroundColor = corDesfoque;
  }
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  sessionStorage.setItem("tipoRetorno", "MODAL");
  createQuestionario();
});
