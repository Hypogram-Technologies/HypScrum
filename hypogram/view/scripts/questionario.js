function getQuetionario(ordem) {
  questionario.forEach((element) => {
    if (element.ordem == ordem) {
      sessionStorage.setItem("questionario", JSON.stringify(element));
      /* return element */
    }
  });
  /*   const dadosQuestionario = JSON.parse(sessionStorage.getItem("questionario"));
  sessionStorage.removeItem("questionario"); */
}
