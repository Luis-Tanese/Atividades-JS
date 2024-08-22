/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = [];

let tarefas1 = prompt("Adicione quatro tarefas à lista, separados por vírgula (ex: limpar o chão, aspirar a casa, arrumar o quarto)");
tarefasLimpeza = tarefas1.split(",");

tarefasLimpeza.splice(2, 1);
tarefasLimpeza.splice(1, 1, "limpar banheiro");

alert(tarefasLimpeza.join(", "));