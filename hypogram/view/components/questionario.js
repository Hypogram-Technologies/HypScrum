import { voltar } from '../scripts/voltar.js'

window.voltar = voltar;

export function createQuestionario() {
  const dadosQuestionario = JSON.parse(localStorage.getItem("questionario"));
  localStorage.removeItem("questionario");
  const main = document.createElement("main");
  main.innerHTML = `
        <section class="cabecalho">
            <h1>${dadosQuestionario.titulo}</h1>
            <p>
                Você está prestes a iniciar o teste sobre o conteúdo do capítulo um. Para ser aprovado é necessário acertar pelo menos 2 questões. Leia atentamente cada pergunta e selecione a resposta que considerar correta. Boa sorte!
            </p>
        </section>
                <section class="questoes">
            <form action="#" method="POST" id="form-questionario"> 
                <ol class="lista-questoes">
                </ol>
                <div class="botoes">
                    <button type="button" id="button-voltar" onclick="voltar()">Voltar</button>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </section>
  `;

  let ol = main.querySelector("ol");
  ol.innerHTML = dadosQuestionario.questoes
    .map((element, index) => {
      return `
      <article>
        <li>
          ${element.conteudo}
        </li>
        <fieldset class="alternativas">
          <div class="alternativa-verdadeira">
            <input type="radio" name="alternativa${index}" id="alternativa-verdadeira${index}">
            <label for="alternativa-verdadeira${index}">verdadeiro</label>
          </div>
          <div class="alternativa-falsa">
            <input type="radio" name="alternativa${index}" id="alternativa-falsa${index}">
            <label for="alternativa-falsa${index}">falso</label>
          </div>
        </fieldset>
      </article>
    `;
    })
    .join("");
  
  document.body.appendChild(main);
}
