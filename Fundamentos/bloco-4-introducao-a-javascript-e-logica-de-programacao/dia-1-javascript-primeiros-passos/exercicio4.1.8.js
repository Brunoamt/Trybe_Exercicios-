// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

const a = 2;
const b = 4;
const c = 11;

let eleE = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  eleE = true;
};
console.log(eleE);