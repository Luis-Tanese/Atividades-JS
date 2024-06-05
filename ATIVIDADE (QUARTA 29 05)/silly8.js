// 8) Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário. Mostrar na tela o total a pagar.

pessoas = Number(prompt('Quantidade de pessoas?'))
diarias = Number(prompt('Número de diárias?'))
pessoasCafe = Number(prompt('Quantas pessoas do grupo vão querer café diário?'));

diaria = 280; 
cafe = 15;   

var totalDiarias = diarias * diaria
var totalCafe = pessoasCafe * cafe 
var totalPagar = totalDiarias + totalCafe

alert('Você deve pagar o valor total de: R$' + totalPagar)