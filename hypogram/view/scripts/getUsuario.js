function getUsuario() {
  const form = document.querySelector("#FormLogin");
  const email = form.querySelector("#email");
  const senha = form.querySelector("#password");
  let isusuarioEncontrado = false;
  usuario.forEach((element) => {
    if (
      (element.usuarionome == email.value ||
        element.usuarioemail == email.value) &&
      element.usuariosenha == senha.value
    ) {
      isusuarioEncontrado = true;
    }
  });

  if (!isusuarioEncontrado) {
    alert("Usuário não encontrado.");
  } else {
    let ultimaPagina = window.history.back();
    if (ultimaPagina) {
      window.location.href = ultimaPagina;
    } else {
      window.location.href = "./aprendaScrum.html";
    }
  }

  localStorage.setItem("login", isusuarioEncontrado);
}
