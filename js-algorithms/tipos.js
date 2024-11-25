/**
 * Tipos primitivos:
 * - string;
 * - number | NaN (int, double) ;
 * - boolean;
 * - null & undefined;
 *
 * Coerção e conversão de tipos:
 * - Coerção é a conversão de tipos de forma implícita, ou seja, o proprio,
 *   Javascript faz isso dependendo da situação.
 * - Conversão, é possibilidade de um tipo virar outro tipo.
 *
 * Falando de Coerção:
 * - Truthy: string não vazia; números > 0 e números < 0; Objetos; Arrays; Funções; Symbol;
 * - Falsy: '', 0, null, undefined, NaN
 */

const toBoolean = (value) => !!value;

// Truthy
console.log(toBoolean('Fernando'));
console.log(toBoolean(-1));
console.log(toBoolean(1));
console.log(toBoolean({}));
console.log(toBoolean([]));
console.log(toBoolean(toBoolean));

// Falsy
console.log(toBoolean(''));
console.log(toBoolean(0));
console.log(toBoolean(null));
console.log(toBoolean(undefined));
console.log(toBoolean(NaN));

// Coerções não booleanas

// -> número para string
console.log('1' + 1);

// -> Array e número para string;
console.log([1, 2, 3] + 1);

/**
 * Para evitar erros geralmente evitamos usar o operador de comparação simples `==`,
 * em troca da assertividade do operador de comparação restrito `===`.
 * 
 * O único caso que você pode se beneficiar do operador de comparação simples,
 * é quando você não quer nenhum valor nulo (`null`, `undefined`),
 * pois: `valor == null` === `valor1 === null || valor1 === undefined)`.
 */

console.log('0' == 0);
console.log(null == undefined);
console.log([] == 0);

console.log('0' === 0);
console.log(null === undefined);
console.log([] === 0);

function somaUm(valor1, valor2) {
  if (valor1 === null || valor1 === undefined) return console.log('Passe um valor valido');
  if (valor2 == null) return console.log('Passe um valor valido');

  console.log('A soma dos valores é:', valor1 + valor2);
}


somaUm(2, 1);
somaUm(4, 1);