// 10) As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez. Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.

var ExpecDeVida = 200
var IntervaloReproducao = 4
var filhotes = 1

var total = ExpecDeVida / IntervaloReproducao
var totalfilhotes = total * filhotes

var decadas = ExpecDeVida / 10
var mediadosfihodesporD = totalfilhotes / decadas

alert('O total de filhotes que as baleias da Groenlândia possuem ao longo da vida é de: ' + totalfilhotes + ' filhotes. Já por década é de: ' + mediadosfihodesporD + ' filhotes')
