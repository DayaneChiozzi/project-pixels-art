// console.log(alteracaoDeCor);

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
classeAdicional.className = 'selected color';
