/* Você tem um array com os nomes dos dias da semana ["Segunda", "Terça",
"Quarta", "Quinta", "Sexta"]. Adicione "Sábado" ao final do array e "Domingo"
ao início. Em seguida, remova o último dia da semana. Passos:
1. Adicione "Sábado" ao final do array.
2. Adicione "Domingo" ao início do array.
3. Remova o último elemento do array. */

let womp = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

womp.push("Sábado");
womp.splice(0, 0, "Domingo");
womp.pop();

console.log(womp.join(", "));