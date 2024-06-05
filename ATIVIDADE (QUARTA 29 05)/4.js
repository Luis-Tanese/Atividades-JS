// 4) Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.

Semana1 = Number(prompt('Digite quando tempo vc estudou na primeira semana do mês em horas: '))
Semana2 = Number(prompt('Digite quando tempo vc estudou na segunda semana do mês em horas: '))
Semana3 = Number(prompt('Digite quando tempo vc estudou na terceira semana do mês em horas: '))
Semana4 = Number(prompt('Digite quando tempo vc estudou na quarta semana do mês em horas: '))

calculo1 = Semana1 + Semana2 + Semana3 + Semana4
media = calculo1 / 4

alert('A média de tempo que vc estudou é de: ' + media + 'por semana')
