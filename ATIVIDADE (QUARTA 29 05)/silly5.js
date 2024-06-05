// 5) Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.

livro1 = Number(prompt('Digite o valor do primeiro livro que vc comprou em reais: '))
livro2 = Number(prompt('Digite o valor do segundo livro que vc comprou em reais: '))
livro3 = Number(prompt('Digite o valor do terceiro livro que vc comprou em reais: '))

soma = livro1 + livro2 + livro3
calculo = (15 / 100) * soma
ComDesconto = soma - calculo

alert('sua compra sem o desconto ficará: ' + soma)
alert('Sua compra com o desconto aplicado será de: ' + ComDesconto)
