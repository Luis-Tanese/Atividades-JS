// 16) Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.

var lado1
var lado2
var lado3

lado1 = Number(prompt("Digite o primeiro lado do triângulo:"))
lado2 = Number(prompt("Digite o segundo lado do triângulo:"))
lado3 = Number(prompt("Digite o terceiro lado do triângulo:"))

if(lado1 === lado2 && lado2 === lado3){
    alert("É um triângulo equilátero.")
} 
else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    alert("É um triângulo isósceles.")
} 
else{
    alert("É um triângulo escaleno.")
}