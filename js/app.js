
function alterarStatus(numero) {
  let itemJogo = document.getElementById("game-" + numero);
  let botao = itemJogo.querySelector('a');
  let imagem = itemJogo.querySelector('div');

  if (botao.classList.contains('dashboard__item__button--return')) {
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
    imagem.classList.remove('dashboard__item__img--rented');

  } else {
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
    imagem.classList.add('dashboard__item__img--rented');
  }
}
