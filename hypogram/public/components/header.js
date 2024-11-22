export function createHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="header-container">
        <img>
        <nav>
            <div class='showmobile'>
              <button class="menu-btn" id="menuBtn"><i class="fa fa-bars"></i></button> 
              <div class="menu-container" id="menuContainer">
                  <button class="close-btn" id="closeBtn">&times;</button>
                  <ul>
                      <li><a href="/home">Início</a></li>
                      <li><a href="/sobre">Sobre</a></li>
                      <li><a href="/aprendaScrum">Aprenda Scrum</a></li>
                      <li><a href="/selecaoQuestionario" class="show">Questionários</a></li>
                      <li><button class="show" onclick="abrirTela('/precertificado')">Certificado</button></li>
                  </ul>
  
                    <button id="entrarSair" class="entrarsairmobile">Entrar</button>
              </div>
            </div>

            <a href="/home" class='hiddenmobile' >Início</a>
            <a href="/sobre" class='hiddenmobile'>Sobre</a>
            <a href="/aprendaScrum" class='hiddenmobile'>Aprenda Scrum</a>
            <a href="/selecaoQuestionario" class="show hiddenmobile">Questionários</a>
        </nav>

        <div id="botoes">
            <button class="show hiddenmobile" onclick="abrirTela('/precertificado')">Certificado</button>
            <button id="entrarSair" class='hiddenmobile'>Entrar</button>
            
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

  const menuBtn = header.querySelector('#menuBtn');
  const menuContainer = header.querySelector('#menuContainer');
  const closeBtn = header.querySelector('#closeBtn');

  menuBtn.addEventListener('click', () => {
    menuContainer.classList.add('open');
    menuBtn.classList.add('hidden');
  });

  closeBtn.addEventListener('click', () => {
    menuContainer.classList.remove('open');
    menuBtn.classList.remove('hidden');
  });
}