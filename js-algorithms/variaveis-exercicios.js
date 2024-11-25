// Exercícios baseados nos conceitos explicados:

/**
 * Exercício 1: Identifique o comportamento do hoisting
 * Descreva o que acontece quando executamos o código abaixo e explique por quê.
 * 
 * RESPOSTA: No exemplo abaixo o hoisting esta agindo na variável (minhaVariavel) elevando sua declaração ao topo,
 * antes da função, porém, sua atribuição não é considerada. Logo, no console será retornado: Undefined.
 */

console.log(minhaVariavel);
var minhaVariavel = "Olá, mundo!";

// O que será exibido no console?

/**
 * Exercício 2: Escopo e shadowing
 * Refatore a função abaixo para evitar o shadowing de variáveis.
 */

// RESPOSTA
{
  function exibirNome (){
    const nome = "Ronaldo";

      function novoNome (){
        const nome2 = "Silvinha";
        console.log (nome);
        console.log (nome2);
      }
      
      novoNome();

      console.log(nome);
 }

 exibirNome();
}
// RESPOSTA 


function mostrarNomes() {
  var nome = "Pedro";

  function mostrarOutroNome() {
    var nome = "Maria";
    console.log(nome); // Maria
  }

  mostrarOutroNome();
  console.log(nome); // Pedro
}

mostrarNomes();

/**
 * Exercício 3: Encadeamento de escopos
 * Complete a função abaixo para usar corretamente o encadeamento de escopos.
 */

function funcaoExterna() {
  let numeroExterno = 10;

  function funcaoInterna() {
    const numeroInterno = 5;
    console.log(numeroExterno + numeroInterno); // Qual será o resultado?
  }

  funcaoInterna();
}

funcaoExterna();

/**
 * Exercício 4: Substitua var por let e const
 * Atualize o código abaixo usando let e const para torná-lo mais seguro.
 */

function calcularSoma(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

console.log(calcularSoma([1, 2, 3, 4, 5]));

/**
 * Exercício 5: Erro com const
 * Explique por que o código abaixo lança um erro e como corrigi-lo.
 * 
 * RESPOSTA: A função retorna um erro, porque a varialve que foi declarada inicialmente como uma constante,
 * teve seu valor atribuido alterado posteriormente resultando no erro.
 * 
 */

function exemploComConst() {
  //const valorFixo = 10;
  const valorFixo = 20; // O que acontece aqui?
  console.log(valorFixo);
}

exemploComConst()
// exemploComConst();

/**
 * Exercício 6: Escopo de bloco com let
 * Analise o comportamento do código abaixo e explique o resultado exibido no console.
 */

function testeLet() {
  const numero = 42;
  
  if (true) {
    console.log(numero); // 42
  }

  console.log(numero); // O que acontece aqui?
}

testeLet();

/**
 * Exercício 7: Refatoração para const
 * Reescreva a função abaixo utilizando const sempre que possível.
 */

function verificarMaiorIdade(idade) {
  
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }

}

console.log(verificarMaiorIdade(20));

/**
 * Exercício 8: Boas práticas para estado global
 * Evite alterações diretas no objeto global abaixo ao atualizar o nome do usuário.
 */

const estadoGlobal = { usuarioId: "123", nome: "João" };

function atualizarNome(novoNome) {
  estadoGlobal.nome = novoNome; // Como evitar alterar diretamente o objeto?
}

atualizarNome("Carlos");
console.log(estadoGlobal);
