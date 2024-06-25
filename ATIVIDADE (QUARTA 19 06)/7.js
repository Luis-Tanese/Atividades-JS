// 7) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

var nome
var idade
var comorbidade

nome = prompt("Digite seu nome:")
idade = Number(prompt("Digite sua idade:"))
comorbidade = prompt("Você tem comorbidade? (S ou N)")


if(idade >= 60 || comorbidade.toUpperCase() === "S"){
  alert(nome + ", você pode se vacinar!")
} 
else{
  alert(nome + ", você não pode se vacinar!")
}
