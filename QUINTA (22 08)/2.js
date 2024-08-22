/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = [];

let produtos = prompt("Adicione três itens à lista, separados por vírgula (ex: pão, ovo, manteiga)");
let produtosArray = produtos.split(",");

if (!produtosArray.includes(" leite")) {
    produtosArray.push(" leite");
}

listaCompras = produtosArray;

alert("Sua lista: " + listaCompras.join(", "));