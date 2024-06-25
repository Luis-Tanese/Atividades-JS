// 3) Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

var num1
var num2

num1 = Number(prompt("Digite o primeiro número!"))
num2 = Number(prompt("Digite o segundo número!"))

if(num1 > num2){
    alert("O número " + num1 + " é maior que o número " + num2)
}
else if(num1 < num2){
    alert("O número " + num2 + " é maior que o número " + num1)
}
else{
    alert("Os dois números são iguais!")
}