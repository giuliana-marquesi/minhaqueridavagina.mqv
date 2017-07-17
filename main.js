var listaResposta = [
  'Vai catar coquinho!',
  'Se joga miga!',
  'Sei lá'
]

function carregaConselho() {

  var conselhoP = document.getElementById('resposta-texto');
  var conselhoDiv = document.getElementById('resposta-balao');
  var vagina = document.getElementById('vagina');

  var numero = Math.floor(Math.random() * listaResposta.length);

  vagina.classList.remove('carregando-conselho');
  vagina.classList.add('carregando-conselho');

  conselhoDiv.style.display = 'block';
  conselhoP.innerHTML = listaResposta[numero];
}
