/*
Pedro está organizando seus filmes favoritos. Crie um array chamado filmesFavoritos com três filmes de sua escolha. 
Modifique o primeiro filme para um novo título. Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. Imprima a lista de filmes favoritos no final.
*/

let filmesFavoritos = ["The silly house", "The silly cat in the hat", "The silly man"];
filmesFavoritos.splice(0, 1, "Womping: The movie");

if(filmesFavoritos[2] == "Harry Potter"){
    alert("Sua lista: " + filmesFavoritos.join(", "));
} else {
    filmesFavoritos.push("Harry Potter");
    alert("Sua lista: " + filmesFavoritos.join(", "));
}
