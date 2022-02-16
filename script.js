const containerPixel = document.getElementById('pixel-board');
containerPixel.style.width = '210px';
containerPixel.style.height = '210px';

function adicioneDiv(five) {
  for (let index1 = 0; index1 < five; index1 += 1) {
    const coluna = document.createElement('div');
    coluna.className = 'pixel';
    containerPixel.appendChild(coluna);
  }
}

function createColuna(five) {
  for (let index1 = 0; index1 < five; index1 += 1) {
    adicioneDiv(five);
  }
}

createColuna(5);

const classeAdicional = document.querySelector('#color-palette').children[0];
classeAdicional.className = 'color selected ';

const paletaCores = document.querySelectorAll('.color');

// função que seleciona a cor da paleta de cores.
function selectedColor(event) {
  for (let index = 0; index < paletaCores.length; index += 1) {
    if (event.target.className === 'color') {
      paletaCores[index].classList.add('selected');
    }
    if (event.target !== paletaCores[index]) {
      paletaCores[index].classList.remove('selected');
    }
  }
}
// função que faz controle do evento
function eventController(event) {
  if (event.target.id === 'color_palette') {
    selectedColor(event);
  }
}

document.body.addEventListener('click', eventController);
