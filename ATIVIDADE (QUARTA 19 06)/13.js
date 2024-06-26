// 13) Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!".

var dano
const vida = 100
var vidaSobrando

dano = Number(prompt("Digite o valor do dano sofrido pelo personagem:"))

vidaSobrando = vida - dano

if(vida <= 0){
    alert("Game Over")
} 
else if(vida >= 1 && vida <= 20){
    alert('Dano crítico, quase sem vida')
} 
else if(vida >= 21 && vida <= 50){
    alert("Dano moderado, vida estável")
} 
else{
    alert("Dano leve, vida boa!")
}