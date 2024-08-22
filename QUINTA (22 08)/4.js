/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let tarefas = [];

let tarefas1 = prompt("Adicione três tarefas à lista, separados por vírgula (ex: limpar o chão, aspirar a casa, arrumar o quarto)");
let tarefasArray = tarefas1.split(",");

tarefasArray.splice(1, 1, "Ligar para o médico");

tarefas = tarefasArray;

alert("Suas tarefas: " + tarefas.join(", "));