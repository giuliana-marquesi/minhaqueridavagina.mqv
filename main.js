var listaResposta = [
  'Oi miga, quanto tempo! Toca aqui!',
  'Traz a bebida que pixca!',
  'Ai miga, sua louca! Assim faz cosquinha.',
  'Você me toca aqui, mas e lá?',
  'A fim de produzir uma endorfina hoje?',
  'Hoje, eu tô, que tô, que tô (cantando)... Ela é bem funkeira ela.',
  'Pode vir quente que eu estou fervendo…',
  'Bate aqui que eu gozo ali.',
  'To a fim de fazer uns exercícios. Bora no pompoarismo?',
  'Se você não se ama como pode amar alguém? Posso ouvir um "Amém"?',
  'Que dia é hoje? O dia das coisas ficarem vermelhas! HA-HA',
  'Você ja ouviu falar de MQV? Vai ser um bafo!',
  'Entre a Dani e a Laura qual das duas vc pegaria? Eu pegaria as duas. Sim, as vezes sua vagina tem uma orientação sexual diferente da sua! Ha-ha'
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
