/* Crie uma função chamada idadeParaAposentadoria que receba a idade de uma pessoa e retorne uma mensagem indicando se ela já pode se aposentar ou ainda precisa trabalhar. Considere que a idade mínima para aposentadoria é 65 anos. */

let numero = Number(prompt("Escreva sua idade"));

idadeParaAposentadoria(numero);

function idadeParaAposentadoria(numero){
    if(numero >= 65){
        alert("Você pode se aposentar");
    } else {
        alert("Você não pode se aposentar");
    }
}