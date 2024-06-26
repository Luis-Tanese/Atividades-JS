// 12) Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho). Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!".

var corSemafaro

corSemafaro = prompt("Digite a cor do semáforo (verde, amarelo ou vermelho):")

if(corSemafaro === "verde"){
    alert("Pode seguir!")
} 
else if(corSemafaro === "amarelo"){
    alert("Alerta, pare!")
} 
else if(corSemafaro === "vermelho"){
    alert("Pare imediatamente!")
} 
else{
    alert("Cor inválida. Digite verde, amarelo ou vermelho.")
}