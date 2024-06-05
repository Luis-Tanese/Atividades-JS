// 2) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 

var anonasc
var anoatual

var totaldias = 365
var totalsemanas = 52
var totalmeses = 12

anonasc = Number(prompt("Digite o ano que você nasceu! Formato (YYYY)"))
anoatual = Number(prompt("Digite o ano atual! Formato (YYYY)"))

resultado = anoatual - anonasc
resultadodia = resultado * totaldias
resultadosemana = resultado * totalsemanas
resultadomes = resultado * totalmeses

alert("Sua idade é: " + resultado + "\n O total de dias que você viveu é: " + resultadodia + "\n O total de semanas que você viveu é: " + resultadosemana + "\n O total de meses que você viveu é: " + resultadomes)