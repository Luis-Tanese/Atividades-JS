// 1) Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.

let Pdesconto = 20
var Sbruto
var Sliquido

Sbruto = Number(prompt("Qual o seu salário bruto?"))

calculo1 = (Sbruto * Pdesconto) / 100
Sliquido = Sbruto - calculo1

alert("O seu salário líquido será " + Sliquido)
