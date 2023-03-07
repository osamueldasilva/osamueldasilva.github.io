//MENU RESPONSIVO//
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "./barra-de-menu.png";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "./excluir.png";
  }
}

///ANIMÇÂO DO TEXTO//
const text = "Olá, eu sou Samuel Barbosa estudande de desenvolvimento Front-end.";
const delay = 75; 
const target = document.getElementById("text");

function typeEffect(text, i, target) {
  if (i < text.length) {
    if (text.charAt(i) === "<") {
      i = text.indexOf(">", i);
    }
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(function () {
      typeEffect(text, i, target);
    }, delay);
  }
}

typeEffect(text, 0, target); 

//------------EFEITO DE ROLAGEM NOS CARDS ----------------//

