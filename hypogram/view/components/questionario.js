/* export  */ function createQuestionario() {
console.log('GET - ' + localStorage.getItem("questionario"))
  const dadosQuestionario = JSON.parse(localStorage.getItem("questionario"));
  localStorage.removeItem("questionario");

  const main = document.createElement("main");
  main.innerHTML = `
        <section class="cabecalho">
            <h1>Cultura e Mindset ágil</h1>
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

  let ol = document.querySelector("ol");
  dadosQuestionario.forEach((element) => {
    ol.innerHTML = `
        <article>
            <li>
                ${element.conteudo}
            </li>
            <fieldset class="alternativas">
                <div class="alternativa-verdadeira">
                    <input type="radio" name="alternativa1" id="alternativa-verdadeira1">
                    <label for="alternativa-verdadeira1">verdadeiro</label>
                </div>
                <div class="alternativa-falsa">
                    <input type="radio" name="alternativa1" id="alternativa-falsa1">
                    <label for="alternativa-falsa1">falso</label>
                </div>
            </fieldset>
        </article>
       `;
  });
  console.log(main);
}

createQuestionario();

/* <article>
<li>
    O principal foco do Manifesto Ágil é em indivíduos e interações, software funcionando, colaboração com o cliente e responder a mudanças.
</li>
<fieldset class="alternativas">
    <div class="alternativa-verdadeira">
        <input type="radio" name="alternativa1" id="alternativa-verdadeira1">
        <label for="alternativa-verdadeira1">verdadeiro</label>
    </div>
    <div class="alternativa-falsa">
        <input type="radio" name="alternativa1" id="alternativa-falsa1">
        <label for="alternativa-falsa1">falso</label>
    </div>
</fieldset>
</article>
<article>
<li>O mindset ágil em uma organização é caracterizado pela manutenção de uma cultura que valoriza a adaptabilidade, a colaboração e a melhoria contínua.</li>
<fieldset class="alternativas">
    <div class="alternativa-verdadeira">
        <input type="radio" name="alternativa2" id="alternativa-verdadeira2">
        <label for="alternativa-verdadeira2">verdadeiro</label>
    </div>
    <div class="alternativa-falsa">
        <input type="radio" name="alternativa2" id="alternativa-falsa2">
        <label for="alternativa-falsa2">falso</label>
    </div>
</fieldset>
</article>
<article>
<li>O Manifesto Ágil é um documento formal, enquanto o mindset ágil é uma atitude e cultura que suporta a aplicação desse manifesto.</li>
<fieldset class="alternativas">
    <div class="alternativa-verdadeira">
        <input type="radio" name="alternativa3" id="alternativa-verdadeira3">
        <label for="alternativa-verdadeira3">verdadeiro</label>
    </div>
    <div class="alternativa-falsa">
        <input type="radio" name="alternativa3" id="alternativa-falsa3">
        <label for="alternativa-falsa3">falso</label>
    </div>
</fieldset>
</article> */
