const operacoes = require('./operacoes')

let numeroA = 4;
let numeroB = 2;
const zero = 0;

console.log("=== DESAFIO DH AULA 04 ===")
//Parte II.2
console.log(numeroA + " + " + numeroB + " = " + operacoes.somar(numeroA, numeroB));
console.log(numeroB + " - " + numeroA + " = " + operacoes.subtrair(numeroB, numeroA));
//Parte II.3
console.log(numeroA + " * " + numeroB + " = " + operacoes.multiplicar(numeroA, numeroB));
//Parte II.4
console.log(numeroA + " * " + zero + " = " + operacoes.multiplicar(numeroA, zero));
//Parte II.5
console.log(numeroB + " / " + numeroA + " = " + operacoes.dividir(numeroB, numeroA));
//Parte II.6
console.log(zero + " / " + numeroA + " = " + operacoes.dividir(zero, numeroA));
console.log(numeroA + " / " + zero + " = " + operacoes.dividir(numeroA, zero));