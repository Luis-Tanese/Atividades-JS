// 6) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 

var kgPlastico = 0.2
var kgPapel = 0.1
var kgMetal = 0.1

qtdPlastico = Number(prompt("Quantos kilos de plástico você deseja entregar?"))
qtdPapel = Number(prompt("Quatos kilos de papel você deseja entregar?"))
qtdMetal = Number(prompt("Quantos kilos de metal você deseja entregar?"))

calcPlastico = kgPlastico * qtdPlastico
calcPapel = kgPapel * qtdPapel
calcMetal = kgMetal * qtdMetal
calcTotal = calcPapel + calcPlastico + calcMetal

alert("O total de dinheiro que você irá  receber é: " + calcTotal)