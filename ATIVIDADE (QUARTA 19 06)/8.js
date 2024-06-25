// 8) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

var altura
var peso
var imc

altura = Number(prompt("Digite sua altura (em metros):"))
peso = Number(prompt("Digite seu peso (em quilogramas):"))

imc = peso / (altura ** 2)

if(imc < 18){
  alert("Abaixo do peso. Seu IMC é " + imc);
} 
else if(imc >= 18 && imc <= 25){
  alert("Peso ideal. Seu IMC é " + imc)
}
else{
  alert("Acima do peso. Seu IMC é " + imc);
}