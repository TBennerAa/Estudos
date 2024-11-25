// ESCOPO GLOBAL | ex.: var meuNome

/**
 * O Hoisting do Javascript permite que funções sejam chamadas antes mesmo da sua definição.
 *
 * Também eleva a criação de variáveis para o topo do escopo atual,
 * te permitindo usar a variável antes da sua declaração.
 */

exibeMeuNome(); 

var meuNome = 'Jhon Doe';

function exibeMeuNome() { 
  console.log(meuNome);
}

exibeMeuNome();

/**
 * A criação de escopos garante que as variáveis não fiquem disponíveis,
 * em lugares que elas não são necessárias.
 *
 * Shadowing (Ficar na frente das variáveis com mesmo nome no escopo externo)
 */

function exibeOutroNome() {
  // ESCOPO DE FUNÇÃO | var meuNome
  /**
   * Declaração: var nomeVarialvel
   * Atribuição: nomeVarialvel = "[VALOR]"
   */
  console.log(meuNome);

  if (true) {
    // ESCOPO DE BLOCO | let outroNome
    var meuNome = 'Jane Doe';
    let outroNome = 'Thalles';

  }
  console.log(meuNome);

}

exibeOutroNome();

/**
 * Escope - determinia os limites de variáveis e funções declaradas;
 * Closure - capacidade de um escopo interno de se lembrar do escopo externo;
 * Shadowing - declarações internas sobrepõe as declarações externas;
 * 
 * Escopos cria uma encadeamento, de fora para dentro,
 * permitindo que variáveis de fora sejam usadas mais internamente.
 *
 * Isso ocorre devido a forma que o Javascript interpreta o código,
 * destacado mais em detalhes a seguir:
 */

let numeroTres = 3;

function primeiraFuncao() {
  let numeroUm = 1;

  function segundaFuncao() {
    let numeroDois = 2;

    console.log(numeroUm);
    console.log(numeroDois);
    console.log(numeroTres);
  }
  
  segundaFuncao();
  
  console.log(numeroDois);
  
}

// primeiraFuncao(); // -> Qual o resultado?

/**
 * Aqui o código é interpretado da seguinte forma:
 * 1. primeiraFuncao é declarada;
 * 2. primeiraFuncao é chamada;
 * 3. numeroUm é declarada;
 * 4. segundaFuncao é declarada e logo em seguida executada;
 * 5. numeroDois é declarada;
 * 6. console.log usa numeroUm
 *    6.1 - o interpretador de código volta todo caminho procurando a variável numeroUm;
 *    6.2 - o interpretador chega no inicio da segundaFuncao e perceber que não existe numeroUm dentro dela;
 *    6.3 - o interpretador sobe para primeiraFuncao e encontra a variável numeroUm;
 *    6.4 - o interpretador pega o valor da variável e passa para console.log;
 *    6.5 - o console.log exibe o valor 1;
 * 7. console.log usa numeroDois
 *    7.1 - o interpretador volta todo o código procurando a variável numeroDois;
 *    7.2 - o interpretado encontra e passa o valor de numeroDois;
 *    7.3 - o console.log exibe o valor 2;
 *
 * Agora, para evitar confusões durante o desenvolvimento há uma dica recomendada,
 * declarar suas variáveis sempre no inicio do escopo. Isso garante previsibilidade,
 * e impede erros durante alterações.
 *
 * Também, há duas alternativas no javascript que substituem o `var`,
 * são elas:
 * - `let`
 *  - diferente do `var`, `let` não permite que re-declarações, e nem hoisting;
 *  - `let` possui escopo de bloco qualquer instrução que possua abertura `{` ou fechamento `}`
 *     como: function () { ... }; for (...) { ... }; if { ... } else { ... } e etc.
 * - `const` - segue a mesma premissa do `let`, porém, não permite que seu valor seja alterado (constante);
 *
 * Essas duas são mais recomendados pois previne erros que antes eram comuns no javascript. Segue o exemplo;
 */

function contaAte10() {
  let contador = 1;

  for (; contador <= 10; contador++) {
    console.log(contador);
  }

  console.log(contador);
}

contaAte10(); // a variável contador ficou disponível dentro de toda função


function contaAte5() {
  console.log(contador);

  for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
  }

  console.log(contador);
}

// contaAte5(); // `let` garante que contador fique disponível apenas dentro do `for`

/**
 * Agora, `const` garante que o valor da variável seja sempre o mesmo:
 */

function exibeNumeroUm() {
  const numeroUm = 1;
  const numeroDois = numeroUm + 1;
  const numeroDoisMaiorQueUm = numeroDois > numeroUm;
  // ...
  console.log(numeroDoisMaiorQueUm);
}

exibeNumeroUm(); // `const` lança um erro caso outro valor seja atribuido a sua variável

/**
 * Basicamente, var pode levar a diferentes resultados, devido a possibilidade
 * de redeclarações e reatribuições;
 * Por isso, o recomendado é que usemos `let` ou `const`. Dando preferência sempre
 * a `const`, e usando `let` somente quando o valor da variável precisar ser alterado
 * durante a execução do código, pois:
 * - ambas não permite o uso da variável antes de sua declaração;
 * - ambas possuem escopo de bloco, evitando conflito de colisões com códigos externos;
 *
 * //////////
 *  TESTE / EXEMPLOS
 * //////////
 */

// 1 - Encontre o erro e refatore o código para javascript mais recente

function calcularTotal(items) {
  let total = 0;

  for (let index = 0; index < items.length; index++) {
    total += items[index];
  }

  return total;
}

const itemPrices = [10, 20, 30];
const finalTotal = calcularTotal(itemPrices);

console.log('Final Total:', finalTotal);

// 2 - Use `const` ao invés de var para retornar o resultado

function podeVotar(idade) {
  const permissao = 'não pode';
  let resultado;

  const naoPodeVotar = idade < 16;
  if (naoPodeVotar) return 'não pode';

  const podeVotarMasNaoEObrigatorio = idade >= 16 && idade < 18;
  if (podeVotarMasNaoEObrigatorio) return 'pode votar';
  
  return 'obrigado a votar';
}

console.log(podeVotar(18));

// 3 - Refatore o código a baixo para que a leitura siga um fluxo mais coerente e compreensível

// 3.1

function maiorQue(numeroUm, numeroDois) {
  let resultado;
  
  if (numeroUm > numeroDois) resultado = true;
  else resultado = false;

  return resultado;
}

console.log(maiorQue(5, 1));

// 3.2

function dizOiPara(nome) {
  const partes = nome.split(' ');

  const temNome = partes[0] != '';
  if (temNome) 
    console.log('Oi ' + partes[0] +  '!');
  else
    console.log('Insira um nome');
}

dizOiPara('');

// 4 - Evite q a referência do estado global mude

const estadoGlobal = { usuarioId: '1', nome: 'Fernando Machado' /* ... */ };

const usuarioIdAtual = estadoGlobal.usuarioId;



console.log(usuarioIdAtual);
