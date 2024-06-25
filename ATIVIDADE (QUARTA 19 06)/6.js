// 6) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso. (DESAFIO: Incluir uma terceira condição para caso receba exatamente igual ao piso)

var salarioAnual
var pisoSalarialMensal
var salarioMensal

salarioAnual = Number(prompt("Digite o salário anual do funcionário:"))
pisoSalarialMensal = Number(prompt("Digite o piso salarial mensal da categoria:"))

salarioMensal = salarioAnual / 12;


if(salarioMensal > pisoSalarialMensal){
  alert("O salário mensal do funcionário é maior que o piso da categoria. Salário mensal do funcionário: " + salarioMensal)
} 
else if(salarioMensal === pisoSalarialMensal){
  alert("O salário mensal do funcionário é exatamente igual ao piso da categoria. Salário mensal do funcionário: " + salarioMensal)
} 
else{
  alert("O salário mensal do funcionário é abaixo do piso da categoria. Salário mensal do funcionário: " + salarioMensal)
}

