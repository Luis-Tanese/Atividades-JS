/* 4) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. 
Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos 
(a soma desses quatro, deve ser igual ao total de eleitores). 
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 
*/

var votoX
var votoY
var votoBranco
var votoNulo

votoX = Number(prompt("Digite o número de votos do candidato X: "))
votoY = Number(prompt("Digite o número de votos do candidato Y: "))
votoBranco = Number(prompt("Digite o número de votos em Branco: "))
votoNulo = Number(prompt("Digite o número de votos Nulos: "))

total = votoX + votoY + votoBranco + votoNulo

percentualX = (votoX / total) * 100
percentualY = (votoY / total) * 100
percentualB = (votoBranco / total) * 100
percentualN = (votoNulo / total) * 100

alert("O percentual dos votos do candidato X é: " + percentualX + "% \nO percentual dos votos do candidato Y é: " + percentualY + "% \nO percentual dos votos em Branco é: " + percentualB + "% \nO percentual dos votos Nulos é: " + percentualN + "%")