// 5) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

var peso
var altura

peso = Number(prompt("Digite seu peso: "))
altura = Number(prompt("Digite sua altura: "))

resultado = (peso / altura * altura)

alert("O seu IMC (Índice de Massa Corpórea) é: " + resultado)