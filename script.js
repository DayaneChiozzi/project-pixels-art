// contei com a juda do meu marido para montar a lógica dos exercicios 6.7,8
// const criada para iniciar com a cor black ao carregar a page.
const colorBlack = document.querySelector('#color-palette').children[0];
colorBlack.className = 'color selected ';

const containerPixel = document.getElementById('pixel-board');
containerPixel.style.width = '210px';
containerPixel.style.height = '210px';
// criando elemento (div) e adc a className pixel. function está criando 5 elementos em linha
function createLine(five) {
  for (let index1 = 0; index1 < five; index1 += 1) {
    const coluna = document.createElement('div');
    coluna.className = 'pixel';
    containerPixel.appendChild(coluna);
  }
}
// function está replicando a function acima em 5 vezes.
function replicateLine(five) {
  for (let index1 = 0; index1 < five; index1 += 1) {
    createLine(five);
  }
}

replicateLine(5);

// function está colocando id(numero) em cada pixel
function adcIdentificadorUnico() {
  let identificador = 0;
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].id = Number((identificador += 1));
  }
}
adcIdentificadorUnico();

// função que seleciona a cor da paleta de cores.
function selectedColor(event) {
  const paletaCores = document.querySelectorAll('.color');

  for (let index = 0; index < paletaCores.length; index += 1) {
    if (event.target.className === 'color') {
      // se o meu alvo tiver a string nominal color
      paletaCores[index].classList.add('selected'); // eu vou adc a classe selected
    }
    if (event.target !== paletaCores[index]) {
      // se meu alvo for diferente do index da const paleta de cores
      paletaCores[index].classList.remove('selected'); // eu vou remover a classe nominal selected
    }
  }
}
// function para pegar a cor
function catchColor() {
  const colorPalette = document.querySelectorAll('#color_palette');

  let resultado = 'black'; // iniciar com a cor black
  for (let index = 0; index < colorPalette.length; index += 1) {
    if (colorPalette[index].className === 'color selected') {
      // se no loop houver a classe nominal color selected
      resultado = window.getComputedStyle(colorPalette[index]).backgroundColor; // (recupera o estilo do elemento)
    } // ele vai considerar e aplicar o backgroundColor dessa classe.
  }
  return resultado;
}
// fuction vai aplicar o evento click
function AdicionarColorPixel(event) {
  const pixelBoard = document.querySelectorAll('.pixel'); // const criada chamando a classe nominal pixel.(todos elementos)
  for (let index = 0; index < pixelBoard.length; index += 1) {
    // percorrendo o array pixelBoard
    const idPixel = pixelBoard[index].id; // ao percorrer o array dos pixel,o id vai ficar na conts idPixel
    if (event.target.id === idPixel) {
      // se o meu alvo for igiual ao que foi armazenado na const idPixel
      pixelBoard[index].style.backgroundColor = catchColor(); // executar o estilo do backgroundColor da fuction catchColor
    }
  }
}

// função que faz controle do evento
function eventController(event) {
  if (event.target.id === 'color_palette') {
    // se o meu alvo for igual ao id nominal color_palette
    selectedColor(event); // selecionar a cor
  }
  if (event.target.className === 'pixel') {
    // se o meu alvo for a classe nominal a pixel
    AdicionarColorPixel(event); // adicionar a cor
  }
}

document.body.addEventListener('click', eventController); // aplicando o evento de click na function eventController
// ao fazer isso, eu estou demilitando o evento, uma vez que ao chama-lo eu coloquei no body. Do contrario, ele ia
// aplicar ao corpo inteiro da page.
