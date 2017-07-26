var listaResposta = [
  'Vai catar coquinho!',
  'Se joga miga!',
  'Sei lá'
]

var conselhoP = document.getElementById('resposta-texto');
var conselhoDiv = document.getElementById('resposta-balao');

function carregaConselho() {

  var vagina = document.getElementById('vagina');

  vagina.classList.add('carregando-conselho');

  vagina.addEventListener("animationend", falaConselho);
  vagina.addEventListener("animationstart", someConselho);


}

function falaConselho() {
  var conselhoP = document.getElementById('resposta-texto');
  var conselhoDiv = document.getElementById('resposta-balao');
  var vagina = document.getElementById('vagina');

  conselhoDiv.style.display = 'block';
  conselhoP.style.display = 'block';
  vagina.classList.remove('carregando-conselho');
}

function someConselho() {
  var conselhoP = document.getElementById('resposta-texto');
  var conselhoDiv = document.getElementById('resposta-balao');

  conselhoP.style.display = 'none';
  conselhoDiv.style.display = 'none';

  var numero = Math.floor(Math.random() * listaResposta.length);
  conselhoP.innerHTML = listaResposta[numero];
}
