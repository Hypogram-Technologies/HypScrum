function getQuetionario(ordem) {
  questionario.forEach((element) => {
    if (element.ordem == ordem) {
      localStorage.setItem("questionario", JSON.stringify(element));
      console.log(sessionStorage.getItem("questionario"))
      /* return element */
    }
  });
  /*   const dadosQuestionario = JSON.parse(sessionStorage.getItem("questionario"));
  sessionStorage.removeItem("questionario"); */
}

/* function redirecionaQuestionario(ordem) {
  switch (ordem) {
    case "1":
      window.location.href = './teste.html'
      break;

    case "2":
      window.location.href = './teste.html'
      break;

    case "3":
      window.location.href = './teste.html'
      break;
    case "4":
      window.location.href = './teste.html'
      break;
    case "5":
      window.location.href = './teste.html'
      break;

    case "6":
      window.location.href = './teste.html'
      break;

    case "7":
      window.location.href = './teste.html'
      break;

    default:
      break;
  }
}
 */