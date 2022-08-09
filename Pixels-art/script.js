function createPainting() {
    const getPainting = document.querySelector('#pixel-board');
    for (let index = 0; index < 25; index += 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      div.style.background = 'white';
      getPainting.appendChild(div);
    }
  }
  createPainting();
  
  function selected() {
    const getColorPalette = document.querySelector('#color-palette');
    function changeSelected(event) {
      const getSelected = document.querySelector('.selected');
      getSelected.classList.remove('selected');
      event.target.classList.add('selected');
    }
    getColorPalette.addEventListener('click', changeSelected);
  }
  selected();
  
  function setColor() {
    const getPixels = document.getElementById('pixel-board');
    function color(event) {
      const getSelected = document.querySelector('.selected');
      const newColor = window.getComputedStyle(getSelected).backgroundColor;
      event.target.style.backgroundColor = newColor;
    }
    getPixels.addEventListener('click', color);
  }
  setColor();
    
  function clearButtom() {
    const buttom = document.getElementById('clear-board');
    function clear() {
      const pixels = document.getElementsByClassName('pixel');
      for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
      }
    }
    buttom.addEventListener('click', clear);
  }
  clearButtom();
  
  function newBoard() {
    let getbuttom = document.getElementById('generate-board');
    const input = document.getElementById('board-size');
    getbuttom.addEventListener('click', function () {
      if (input.value < 5) {
        alert('Board inválido!');
      } else {
        document.querySelector('#pixel-board').remove();
        const main = document.getElementsByTagName('main')[0];
        const board = document.createElement('section');
        board.id = 'pixel-board';
        board.style.width = '240px';
        main.appendChild(board);
        const getPainting = document.querySelector('#pixel-board');
  
        if (input.value >= 50) {
          getPainting.style.width = '2100px';
          for (let index = 0; index < 2500; index += 1) {
            const div = document.createElement('div');
            div.className = 'pixel';
            div.style.background = 'white';
            getPainting.appendChild(div);
          }
        } else {
          let pixels = '42';
          size = input.value * pixels + 'px';
          getPainting.style.width = size;
          let newSize = input.value * input.value;
          for (let index = 0; index < newSize; index += 1) {
            const div = document.createElement('div');
            div.className = 'pixel';
            div.style.background = 'white';
            getPainting.appendChild(div);
          }
        }
        setColor();
      }
    });
  }
  newBoard();
  
  function randomColors() {
    const firstColor = document.getElementsByClassName('blue')[0];
    const secondColor = document.getElementsByClassName('green')[0];
    const thirdColor = document.getElementsByClassName('red')[0];
    function colors() {
      const randomFirstColor = Math.ceil(Math.random() * 255);
      const randomSecondColor = Math.ceil(Math.random() * 255);
      const randomThirdColor = Math.ceil(Math.random() * 255);
      return `rgb(${randomFirstColor}, ${randomSecondColor}, ${randomThirdColor})`;
    }
    colors();
    firstColor.style.backgroundColor = colors();
    secondColor.style.backgroundColor = colors();
    thirdColor.style.backgroundColor = colors();
  }
  randomColors();
  
