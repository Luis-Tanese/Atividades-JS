// 4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

var salario
var servico

salario = Number(prompt("Qual o seu salário?"))
servico = Number(prompt("Qual o seu tempo de serviço?"))

if(servico >= 5){
    calc1 = salario + (salario * 0.05)
    alert("Seu novo salário será " + calc1)
}
else{
    alert("Seu salário não irá mudar 🤫🧏‍♂️")
}