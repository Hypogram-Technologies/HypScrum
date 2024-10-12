export function createFooter(){

    const footer = document.createElement('footer');
    footer.innerHTML =
    `
    <div class="footer-container">
        <img id="logo">
        <div>
            <div id="copy">
                <p>Copyright © 2024 Hypogram.</p>
                <p>Todos os direitos reservados.</p>
            </div>
        
            <img id="git">
        </div>
    </div>
    `;

    const logo = footer.querySelector('#logo');
    logo.src = '../public/imgs/logotipo-footer.svg';
    logo.alt = "Logotipo da empresa";

    const git = footer.querySelector('#git');
    git.src = '../public/imgs/github.svg';
    git.alt = "Logotipo do curso";

    document.body.appendChild(footer);
}