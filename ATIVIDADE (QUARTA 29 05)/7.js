// 7) Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.

publico = Number(prompt('Publico estimado?'))
pessoasPorBanheiro = 50
pessoasPorbar = 150
banheiros = publico/ pessoasPorBanheiro
bares = publico/ pessoasPorbar
alert("Para um público de: " + publico + ' pessoas, seriam necessários aproximadamente ' +  banheiros + ' banheiros e ' + bares + ' bares.')
