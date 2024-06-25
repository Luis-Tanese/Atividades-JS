// 5) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. (DESAFIO: Incluir "Recuperação", sendo a média entre 5 e 7, e "Reprovado" apenas para médias abaixo de 5)


var nota1
var nota2
var nota3 

nota1 = Number(prompt("Digite a primeira nota:"))
nota2 = Number(prompt("Digite a segunda nota:"))
nota3 = Number(prompt("Digite a terceira nota:"))

media = (nota1 + nota2 + nota3) / 3

if(media >= 7){
  alert("Aprovado! Média: " + media)
} 
else if(media >= 5){
  alert("Recuperação! Média: " + media)
}
else{
  alert("Reprovado! Média: " + media)
}