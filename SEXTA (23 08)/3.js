/* Você tem um array com as cores ["Vermelho", "Verde", "Azul"]. Verifique se a
cor "Amarelo" está presente no array e imprima o resultado. */

let womp = ["Vermelho", "Verde", "Azul"];

if(!womp.includes("Amarelo")){
    console.log(womp.join(", "));
}