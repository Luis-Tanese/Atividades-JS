// 2) Crie um programa que solicite ao usuário um valor em horas e converta para minutos e segundos.

var horas
var minutos
var segundos

horas = Number(prompt("Digite o número de horas que você queira que seja convertida"))

minutos = horas * 60
segundos = minutos * 60

alert("Horas: " + horas + "\nMinutos: " + minutos + "\nSegundos: " + segundos)