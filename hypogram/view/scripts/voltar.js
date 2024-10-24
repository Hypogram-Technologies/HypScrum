export function voltar() {
  let tipoRetorno = sessionStorage.getItem("tipoRetorno");
  sessionStorage.removeItem("tipoRetorno");

  if (tipoRetorno != null) {
    if (tipoRetorno.toUpperCase().trim() == "MODAL") {
      const main = document.querySelector("main");
      const secaoQuestoes = main.querySelector("#secao-questoes");
      const body = document.body;
      main.removeChild(secaoQuestoes);
      const container = document.querySelector(".container");
      if (container) {
        container.style.backgroundColor = '';
      } else {
        body.style.backgroundColor = '';
      }
    }
  } else {
    if (window.opener) {
      window.close();
    } else {
      window.history.back();
    }
  }
}
