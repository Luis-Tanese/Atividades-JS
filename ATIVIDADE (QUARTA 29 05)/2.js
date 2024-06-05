// 2) Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. Porém, você possui apenas uma nota de R$100 para pagar. Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).

var arroz
var batat_palha
var suco_de_garrafa
let numDinheiro = 100

arroz = Number(prompt('digite o valor do Arroz: '))
batat_palha = Number(prompt('digite o valor da Batata palha: '))
suco_de_garrafa = Number(prompt('digite o valor do Suco de garrafa: '))

calculo1 = arroz + batat_palha + suco_de_garrafa
calculo2 = numDinheiro - calculo1

alert('o seu troco será de: ' + calculo2)
