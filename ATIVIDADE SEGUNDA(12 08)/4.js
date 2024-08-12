/* Você deve criar um array contendo 5 números inteiros quaisquer. Escreva uma função chamada somaElementos que receba esse array como argumento e retorne a soma de todos os seus elementos. */


const numeros = [12, 24, 35, 46, 57];

function somaElementos() {
    let womp = 0;
    for(let i = 0; i < numeros.length; i++) {
        womp += numeros[i];
    }
    alert("A soma de tudo é " + womp);
}

somaElementos();
