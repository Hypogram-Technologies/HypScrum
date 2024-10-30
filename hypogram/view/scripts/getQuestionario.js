function getQuestionario(ordem) {
  questionario.forEach((element) => {
    if (element.ordem == ordem) {
      localStorage.setItem("questionario", JSON.stringify(element));
      /* return element */
    }
  });
}
