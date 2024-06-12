// 7) Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.

var notaindividual
var notaseminario
var notafinal
var pesoindividual
var pesoseminario
var pesofinal

notaindividual = Number(prompt("Digite a nota da atividade individual:"))
pesoindividual = Number(prompt("Digite o peso da nota da atividade individual:"))
notaseminario = Number(prompt("Digite a nota do seminario em equipe:"))
pesoseminario = Number(prompt("Digite o peso da nota do seminario em equipe:"))
notafinal = Number(prompt("Digite a nota do projeto final:"))
pesofinal = Number(prompt("Digite o peso da nota do projeto final:"))

pesototal = pesoindividual + pesoseminario + pesofinal
media = (notaindividual * pesoindividual + notaseminario * pesoseminario + notaprojeto * pesoprojeto) / pesototal

alert("A média ponderada é: " + media)