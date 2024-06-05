/*6) Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, 
para veículos (km por litro). Para isso, devem ser digitados os dados de distância total percorrida 
(km) e total de combustível gasto (litros), mostrando o resultado ao final.*/

L = Number(prompt('Quantos quilômetros você percorreu com seu veículo? '))
km = Number(prompt('Nesse percursso, quantos litros de combustível você gastou? '))

resultado = km / L

alert('Este é o resultado que seu carro consome por quilômetro rodado: ' + resultado + 'km/l')
