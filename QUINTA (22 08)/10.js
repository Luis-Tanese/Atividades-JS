/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let womp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let num = Number(prompt("Escreva um número que exista nesse array:"));

if(!womp.includes(num)){
    alert("essenúmero não existe no array!");
} else {
    alert("O index desse número é: " + womp.indexOf(num));
}