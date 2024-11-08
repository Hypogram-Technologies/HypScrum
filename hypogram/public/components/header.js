export function createHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="header-container">
        <img>
        <nav>
            <a href="/">Início</a>
            <a href="/sobre">Sobre</a>
            <a href="/aprendaScrum">Aprenda Scrum</a>
            <a href="/selecaoQuestionario" class="show">Questionários</a>
        </nav>
        <div id="botoes">
            <button class="show" onclick="abrirTela('/preCertificado')">Certificado</button>
            <button id="entrarSair">Entrar</button>
        </div>
    </div>
    `;

  const img = header.querySelector("img");
  img.src = "/imgs/logotipo.svg";
  img.alt = "Logotipo do curso";

  let login = localStorage.getItem("login");

  if (!login) {
    const aparecer = header.querySelectorAll(".show");
    aparecer.forEach((elemento) => {
      elemento.style.display = "none";
    });
  } else {
    let entrarSair = header.querySelector("#entrarSair");
    entrarSair.innerHTML = "Sair";
  }

  const main = document.querySelector("main");
  document.body.insertBefore(header, main);
}
