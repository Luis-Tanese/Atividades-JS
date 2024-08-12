/* Escreva uma função chamada verificarParidade que receba um número inteiro como argumento e retorne uma string indicando se o número é "Par" ou "Ímpar".*/

let numero = Number(prompt("Escreva um número"));

verificarParidade(numero);

function verificarParidade(numero) {
    romp = numero % 2;
    if(romp == 0){
        alert("É um par!");
    } else {
        alert("É impar!");
    }
}
