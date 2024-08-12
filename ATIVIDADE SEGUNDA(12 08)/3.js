/* Faça um programa que leia dois números e apresente na tela o maior deles. A mensagem deve ser:
“Maior número entrado: <número>”, onde em <número> deve aparecer o maior número entrado. */

let numero1 = Number(prompt("Escreva o primeiro número"));
let numero2 = Number(prompt("Escreva o segundo número"));

maiorNumero(numero1, numero2);

function maiorNumero(numero1, numero2){
    if(numero1 > numero2){
        alert(numero1 + " é o maior número");
    }
    else if(numero1 == numero2){
        alert("Os dois números são iguais");
    } else {
        alert(numero2 + " é o maior número");
    }
}