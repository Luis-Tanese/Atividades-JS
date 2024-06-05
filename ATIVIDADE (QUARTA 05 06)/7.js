// 7) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.

var pessoas = 45
var chopp = 300

desp = Number(prompt("Quantos litros foram desperdiçados?"))
sob = Number(prompt("Quantos litros sobraram do chopp?"))

litrosRest = chopp - (desp + sob)
litrosporpessoa = litrosRest / pessoas

alert("A média de litros bebidos por pessoa é " + litrosporpessoa + " litros")
