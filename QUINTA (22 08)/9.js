/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metas = [];

metas.push("Correr 2km");
metas.push("Fazer um gol no futbrawl");
metas.push("Fazer uma oração para que a policia não ache o corpo do miguel no riacho ao lado");

if(metas[1] != "exercício físico"){
    metas.splice(1, 1, "praticar esportes");
    alert(metas.join(", "));
} else {
    alert(metas.join(", "));
}