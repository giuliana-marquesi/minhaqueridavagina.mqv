var listaResposta = [
  'Oi miga, quanto tempo! Toca aqui!',
  'Traz a bebida que pixca!',
  'Ai miga, sua louca! Assim faz cosquinha.',
  'Você me toca aqui, mas e lá?',
  'Afim de produzir uma endorfina hoje?',
  'Hoje, eu tô, que tô, que tô (cantando) ... Ela é bem funkeira ela.',
  'Pode vir quente que eu estou fervendo ...',
  'Bate aqui que eu gozo ali.',
  'Tô afim de fazer uns exercícios. Bora no pompoarismo?',
  'Se você não se ama como pode amar alguém? Posso ouvir um "Amém"?',
  'Que dia é hoje? O dia das coisas ficarem vermelhas! HA-HA',
  'Você já ouviu falar de MQV? Vai ser um bafo!',
  'Dani ou Laura? Eu pegaria as duas. Vaginas tem orientação sexual própria! Ha-ha',
  'Relaxa e goza que a vida é rosa',
  'Pode me tocar. Não precisa de outra mão',
  'Ai, que delícia! Até babei aqui!',
  'Antes de entrar tem que tocar aquela campainha ali em cima, bebê! Gosto de gente educada!',
  'Beija meus lábios (não disse quais)',
  '“Mulher tem que ser depilada” Acho uó esse povo que nem me conhece palpitando meu corte de cabelo!',
  'Pode olhar pra mim, amiga! Eu sou linda!'
]

var cont = 0;
var numero = 0;

function carregaConselho() {

  var conselhoP = document.getElementById('resposta-texto');
  var conselhoDiv = document.getElementById('resposta-balao');
  var vagina = document.getElementById('vagina');
  numero = Math.floor(Math.random() * listaResposta.length);

  vagina.classList.add('carregando-conselho');

  vagina.addEventListener("animationend", function() {falaConselho(vagina, conselhoDiv, conselhoP, cont)});
  vagina.addEventListener("animationstart", function() {someConselho(conselhoDiv, conselhoP)});

  //não esquecer de tirar isso depois
  if (cont < listaResposta.length - 1){
    cont++;
  } else {
    cont = 0;
  }

}

function falaConselho(vagina, conselhoDiv, conselhoP, numero) {
  conselhoDiv.style.display = 'block';
  conselhoP.style.display = 'block';
  vagina.classList.remove('carregando-conselho');
  conselhoP.innerHTML = listaResposta[numero];
}

function someConselho(conselhoDiv, conselhoP) {
  conselhoP.style.display = 'none';
  conselhoDiv.style.display = 'none';

}
