const alteracaoDeCor = document.getElementById('color-palette').children[0];
alteracaoDeCor.style.backgroundColor = 'black';
// console.log(alteracaoDeCor);

const containerPixel = document.getElementById('pixel-board');
containerPixel.style.borderColor = 'black';
containerPixel.style.borderWidth = '1px';
containerPixel.style.width = '250px';
containerPixel.style.height = '250px';
containerPixel.style.borderStyle = 'solid';

function adicioneDiv(five) {
  for (let index1 = 0; index1 < five; index1 += 1) {
    const coluna = document.createElement('div');
    coluna.className = 'pixel';
    coluna.style.border = '1px solid black';
    coluna.style.width = '48px';
    coluna.style.height = '48px';
    coluna.style.backgroundColor = 'WHITE';
    containerPixel.appendChild(coluna);
  }
}

function createColuna(five) {
  for (let index1 = 0; index1 < five; index1 += 1) {
    adicioneDiv(five);
  }
}

createColuna(5);
