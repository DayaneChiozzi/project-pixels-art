const alteracaoDeCor = document.getElementById('color-palette').children[0];
alteracaoDeCor.style.backgroundColor = 'black';
alteracaoDeCor.className = 'selected';
// console.log(alteracaoDeCor);

const containerPixel = document.getElementById('pixel-board');
containerPixel.style.borderColor = 'black';
containerPixel.style.borderWidth = '1px';
containerPixel.style.width = '225px';
containerPixel.style.height = '210px';
containerPixel.style.borderStyle = 'solid';

function adicioneDiv(five) {
  for (let index1 = 0; index1 < five; index1 += 1) {
    const coluna = document.createElement('div');
    coluna.className = 'pixel';
    coluna.style.border = '1px solid red';
    coluna.style.width = '48px';
    coluna.style.height = '48px';
    coluna.style.backgroundColor = 'WHITE';
    coluna.style.margin = '1px';
    coluna.style.marginLeft = '1.5px';
    containerPixel.appendChild(coluna);
  }
}

function createColuna(five) {
  for (let index1 = 0; index1 < five; index1 += 1) {
    adicioneDiv(five);
  }
}

createColuna(5);

function alterarWidth() {
  const test = document.querySelectorAll('.pixel');
  for (let index = 0; index < test.length; index += 1) {
    test[index].style.width = '38px';
    test[index].style.height = '38px';

    // test[index].style.
  }
  console.log(test);
}
alterarWidth();
