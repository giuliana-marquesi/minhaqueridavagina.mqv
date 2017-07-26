var listaResposta = [
  'Vai catar coquinho!',
  'Se joga miga!',
  'Sei lá'
]


function carregaConselho() {

  var conselhoP = document.getElementById('resposta-texto');
  var conselhoDiv = document.getElementById('resposta-balao');
  var vagina = document.getElementById('vagina');

  vagina.classList.add('carregando-conselho');

  vagina.addEventListener("animationend", function() {falaConselho(vagina, conselhoDiv, conselhoP)});
  vagina.addEventListener("animationstart", function() {someConselho(conselhoDiv, conselhoP)});


}

function falaConselho(vagina, conselhoDiv, conselhoP) {

  conselhoDiv.style.display = 'block';
  conselhoP.style.display = 'block';
  vagina.classList.remove('carregando-conselho');
}

function someConselho(conselhoDiv, conselhoP) {

  conselhoP.style.display = 'none';
  conselhoDiv.style.display = 'none';

  var numero = Math.floor(Math.random() * listaResposta.length);
  conselhoP.innerHTML = listaResposta[numero];
}
