// 15) Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.

var quantidade
var valor

quantidade = Number(prompt("Digite o número de ovos comprados:"))

if(quantidade <= 12){
    valor = quantidade * 0.4
} 
else if(quantidade <= 24){
    valor = quantidade * 0.3
} else {
    valor = quantidade * 0.25
}

alert("Valor total da compra: R$" + valor)