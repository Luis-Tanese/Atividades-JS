// 20) Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes. O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). Criar um programa que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho. Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!"

var nomeEquipes
var nomeIntegrante
var distanciaTrecho
var velocidadeMedia
var velocidadeMediaGeral
var tempoTrecho
var somaVelocidades = 0
var resultadoFinal

var silly

let tempos = []
let velocidades = []

for (silly = 1; silly <= 4; silly++) {
    nomeIntegrante = prompt("Digite o nome do " + silly + "º integrante:")
    tempoTrecho = parseFloat(prompt("Digite o tempo em horas que gastou no trecho " + silly + ":"))
    tempos.push(tempoTrecho)
}

for (silly = 0; silly < 4; silly++) {
    distanciaTrecho = [30, 45, 30, 35][silly]
    velocidadeMedia = distanciaTrecho / tempos[silly]
    velocidades.push(velocidadeMedia)
}

for (silly = 0; silly < 4; silly++) {
    somaVelocidades += Number(velocidades[silly])
}

velocidadeMediaGeral = somaVelocidades / 4

if(velocidadeMediaGeral < 15){
    mensagemDesempenho = "Desempenho pode melhorar bastante!"
} 
else if(velocidadeMediaGeral >= 15 && velocidadeMediaGeral <= 18){
    mensagemDesempenho = "Desempenho bom, mas ainda pode melhorar!"
} 
else{
    mensagemDesempenho = "Desempenho excelente. Parabéns!"
}

resultadoFinal = "Velocidade média do Trecho 1: " + velocidades[0] + " km/h\n" + "Velocidade média do Trecho 2: " + velocidades[1] + " km/h\n" + "Velocidade média do Trecho 3: " + velocidades[2] + " km/h\n" + "Velocidade média do Trecho 4: " + velocidades[3] + " km/h\n" + "Velocidade média geral: " + velocidadeMediaGeral + " km/h\n\n" + mensagemDesempenho

alert(resultadoFinal)