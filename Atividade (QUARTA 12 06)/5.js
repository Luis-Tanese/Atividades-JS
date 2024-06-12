// 5) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.

let territorio = 320
let territoriocasal = 400
let femea = 9
let macho = 5
var totalbaio
var quantcasal

quantcasal = Number(prompt("Qual a quantidade de casais na área? (máx 5)"))

totalbaio = femea + macho
areacasal = quantcasal * territoriocasal
areaindividuo = totalbaio - (quantcasal * 2) * 320
areatotal = areacasal + areaindividuo

alert("Soma da área dominada pelos casais: " + areacasal + "\nSoma da área dominada pelos individuais: " + areaindividuo + "\nSoma total de todas as áreas: " + areatotal)