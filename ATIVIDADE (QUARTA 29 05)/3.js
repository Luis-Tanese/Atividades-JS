// 3) Na volta as aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais), além de 1 bombom para o(a) professor(a). Faça um programa no qual seja digitado a quantidade de alunos da turma e mostrando quantos bombons no total devem ser comprados.

professor = 1
var NumAlunos

NumAlunos = Number(prompt('Digite o número de alunos na sua sala: '))

Calculo1 = NumAlunos * 2
resultado = Calculo1 + professor

alert('o número de bombons que terá que comprar é: ' + resultado)
