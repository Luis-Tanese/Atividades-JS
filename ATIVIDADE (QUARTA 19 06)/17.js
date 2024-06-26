/* 17) Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

   CEREJA - CEREJA - CEREJA -> R$100
   LARANJA - LARANJA - LARANJA -> R$80
   CEREJA - LARANJA - CEREJA -> R$50
   LARANJA - CEREJA - LARANJA -> R$25 
*/

var fruta1
var fruta2
var fruta3
let valores
var sequencia
var valor

fruta1 = prompt("Digite a primeira fruta (CEREJA ou LARANJA):").toUpperCase()
fruta2 = prompt("Digite a segunda fruta(CEREJA ou LARANJA):").toUpperCase()
fruta3 = prompt("Digite a terceira fruta(CEREJA ou LARANJA):").toUpperCase()

valores = {
    "CEREJA-CEREJA-CEREJA": 100,
    "LARANJA-LARANJA-LARANJA": 80,
    "CEREJA-LARANJA-CEREJA": 50,
    "LARANJA-CEREJA-LARANJA": 25
}

sequencia = fruta1 + "-" + fruta2 + "-" + fruta3
valor = valores[sequencia] || 0

alert("Valor ganho: R$ " + valor);