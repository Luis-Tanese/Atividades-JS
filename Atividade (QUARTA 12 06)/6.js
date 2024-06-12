// 6) Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza. Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.

var distancia
var horas

distancia = Number(prompt("Digite quantos kilômetros durou a trilha:"))
horas = Number(prompt("Digite quantas horas durou a trilha:"))

calculo = distancia / horas

alert("A sua velocidade da trilha foi de " + calculo + "km/h!")