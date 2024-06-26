/* 14) Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são:
a) Ter pelo menos 65 anos
b) Ter trabalhado pelo menos 30 anos
c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos
*/

var idade
var tempo

idade = Number(prompt("Digite a idade do trabalhador:"))
tempo = Number(prompt("Digite o tempo de serviço (em anos):"))

if(idade >= 65 || (idade >= 60 && tempo >= 25) || tempo >= 30){
    alert("O trabalhador pode se aposentar!")
} 
else{
    alert("O trabalhador ainda não pode se aposentar.")
}