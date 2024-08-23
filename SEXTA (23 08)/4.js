/* Você tem uma lista de tarefas [ "Lavar a louça", "Estudar", "Fazer compras"].
Adicione uma nova tarefa ao final da lista e depois remova a primeira tarefa,
já que foi completada. Por fim, verifique se "Estudar" ainda está na lista. */

let womp = [ "Lavar a louça", "Estudar", "Fazer compras"];
womp.push("Desovar um corpo no riaho ao lado");
womp.shift();

if(womp.includes("Estudar")){
    console.log("(˘･_･˘)")
}