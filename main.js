var listaResposta = [
  'Vai catar coquinho!',
  'Se joga miga!',
  'Sei lá'
]

function carregaConselho() {

  var conselhoP = document.createElement('p');
  var conselhoDiv = document.createElement('div');
  var vagina = document.getElementById('vagina');
  var conteiner = document.getElementById('conteiner-da-vagina');

  var numero = Math.floor(Math.random() * listaResposta.length);

  vagina.className = 'carregando-conselho';

  conselhoP.innerHTML = listaResposta[numero];
  console.log(numero);
  console.log(listaResposta);

  conselhoDiv.classList.add("resposta-balao");
  conselhoP.classList.add("resposta-texto");
  conselhoDiv.appendChild(conselhoP);
  conteiner.appendChild(conselhoDiv);


}
