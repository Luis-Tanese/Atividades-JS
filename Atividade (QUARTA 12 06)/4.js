// 4) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.

let preço = 45.5
let azulpm = 120
let caixa = 60
var largura
var comprimento

largura = Number(prompt("Digite a largura de sua piscina (em metros)"))
comprimento = Number(prompt("Digite o comprimento de sua piscina (em metros)"))

area = largura * comprimento
qazul = azulpm * area
numcaixas = qazul/caixa

custo = numcaixas*preço

alert("O valor dos azulejos para uma piscina de " + area + "m² é R$" + custo + " consistindo de " + numcaixas + " caixas")