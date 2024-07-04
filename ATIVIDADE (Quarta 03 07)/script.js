let pergunta1 = document.getElementById('perguntaSelect1');
let pergunta2 = document.getElementById('perguntaSelect2');
let pergunta3 = document.getElementById('perguntaSelect3');
let resposta = document.getElementById('Resultado');

function MostraValorSelect() {
    if (pergunta1.value === 'opcao' || pergunta2.value === 'opcao' || pergunta3.value === 'opcao') {
        alert('Selecione todas as opções!');
        return;
    }
    let pontuacao = Number(pergunta1.value) + Number(pergunta2.value) + Number(pergunta3.value);
    resposta.value = pontuacao;
    if (pontuacao === 3) {
        alert('Você acertou todas as perguntas!');
    } else if (pontuacao === 2) {
        alert('Você acertou duas perguntas!');
    } else if (pontuacao === 1) {
        alert('Você acertou uma pergunta!');
    } else if (pontuacao === 0) {
        alert('Você errou todas!');
    }
}