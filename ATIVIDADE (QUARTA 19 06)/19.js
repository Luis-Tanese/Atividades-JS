// 19) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose. Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta). Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".

var nomePaciente
var celiaco
var lactose
var nomeAlimento
var contemGluten
var contemLactose
var silly

var podeComer = true
let alimentos = []

nomePaciente = prompt("Digite seu nome:")
celiaco = prompt("Você é celíaco? (SIM ou NÃO)").toUpperCase()
lactose = prompt("Você é intolerante à lactose? (SIM ou NÃO)").toUpperCase()

for(silly = 1; silly <= 3; silly++){
    nomeAlimento = prompt("Digite o nome do " + silly + "º alimento:")
    contemGluten = prompt("O alimento contém glúten? (SIM ou NÃO)").toUpperCase()
    contemLactose = prompt("O alimento contém lactose? (SIM ou NÃO)").toUpperCase()
    alimentos.push({ nome: nomeAlimento, gluten: contemGluten, lactose: contemLactose })
}

for(silly = 0; silly < 3; silly++){
    if ((celiaco === "SIM" && alimentos[silly].gluten === "SIM") ||
        (lactose === "SIM" && alimentos[silly].lactose === "SIM")) {
        podeComer = false
        break
    }
}

if(podeComer == true){
    alert("Dieta adequada!")
}
else{
    alert("Dieta inadequada, contém alimentos aos quais o paciente é intolerante!");
}