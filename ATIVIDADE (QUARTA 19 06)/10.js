// 10) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

var area
var populacao
var densidade

populacao = Number(prompt("Qual a população da cidade?"))
area = Number(prompt("Qual a area da cidade(Em quilômetros quadrados)"))

if(densidade >= 100){
    console.log("Densidade alta: " + densidade + " habitantes por quilômetro quadrado");
}
else if(densidade >= 25 && densidade < 100){
    console.log("Densidade média: " + densidade + " habitantes por quilômetro quadrado");
}
else{
    console.log("Densidade baixa: " + densidade + " habitantes por quilômetro quadrado");
}