/* Dado um array de números inteiros, escreva uma função chamada encontrarMaiorNumero que encontre e retorne o maior número presente no array. */

const numeros = [12, 24, 35, 46, 57];

function checar(){
    let maiorNumero = numeros[0];
    for(let i = 1; i < numeros.length; i++){
        if(maiorNumero < numeros[i]){
            maiorNumero = numeros[i];
        }
    }
    alert("O maior número é " + maiorNumero);
}

checar();