import { voltar } from "/scripts/voltar.js";
import { enviarQuestionario } from "/scripts/enviarQuestionario.js";

window.voltar = voltar;
window.enviarQuestionario = enviarQuestionario;

export function createQuestionario() {
  const dadosQuestionario = JSON.parse(localStorage.getItem("questionario"));
  if (!dadosQuestionario) {
    console.error("Nenhum questionário encontrado no localStorage.");
    return;
  }
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.id = "secao-questoes";
  section.innerHTML = `
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
                    <button type="submit" onclick="enviarQuestionario()">Enviar</button>
                </div>
            </form>
        </section>
  `;

  let ol = section.querySelector("ol");
  ol.innerHTML = dadosQuestionario.questoes
    .map((element, index) => {
      return `
      <article>
        <li>
          ${element.conteudo}
        </li>
        <fieldset class="alternativas">
          <div class="alternativa-verdadeira">
            <input type="radio" name="alternativa${element.id}" id="alternativa-verdadeira${element.id}">
            <label for="alternativa-verdadeira${element.id}">verdadeiro</label>
          </div>
          <div class="alternativa-falsa">
            <input type="radio" name="alternativa${element.id}" id="alternativa-falsa${element.id}">
            <label for="alternativa-falsa${element.id}">falso</label>
          </div>
        </fieldset>
      </article>
    `;
    })
    .join("");
  main.appendChild(section);
}
