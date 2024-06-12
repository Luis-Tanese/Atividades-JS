// 3) Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação.

var base
var expoente

base = Number(prompt("Digite o número base: "))
expoente = Number(prompt("Digite o número para exponenciar a base"))

calculo = base ** expoente

alert("O número exponenciado é " + calculo)