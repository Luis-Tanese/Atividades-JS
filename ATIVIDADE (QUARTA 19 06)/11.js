// 11)  Elabore um programa que converta uma quantidade de dólares para reais. Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.

var valorDolar
var cotacaoDolar
var valorReal

valorDolar = parseFloat(prompt("Digite o valor em dólares:"))
cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar:"))

valorReal = valorDolar * cotacaoDolar

if(cotacaoDolar > 5){
    alert("Valor em reais: R$" + valorReal + "O dólar está caro.")
}
else{
    alert("Valor em reais: R$" + valorReal + "O dólar está barato.");
}