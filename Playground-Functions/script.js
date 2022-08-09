// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let string = ultimo + "," + " " + primeiro;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties;
  let result = vitoria + empate;
  return result;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let vezesRepetidas = 0;
  for (let index in array) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let index2 in array) {
    if (array[index2] === maiorNumero) {
      vezesRepetidas += 1;
    }
  }
  return vezesRepetidas;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let maisProximo = '';
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    maisProximo = 'os gatos trombam e o rato foge';
  } else if (mouse - cat1 > mouse - cat2) {
    maisProximo = 'cat1';
  } else if (mouse - cat2 > mouse - cat1) {
    maisProximo = 'cat2';
  }
  return maisProximo;
}

// Desafio 8
function fizzBuzz(array) {
 let result = [];
 for (let index in array) {
  if (array[index] % 3 === 0 && array[index] % 5 === 0) {
    result.push('fizzBuzz');
  } else if (array[index] % 5 === 0) {
    result.push('buzz');
  } else if (array[index] % 3 === 0) {
    result.push('fizz')
  } else {
    result.push('bug!')
  }
 }
 return result;
}
// Desafio 9
function encode(string) {
  let result = string;
  for (let index in string) {
    if (string[index] === 'a') {
      result = result.replace('a', '1');
    } else if (string[index] === 'e') {
      result = result.replace('e', '2');
    } else if (string[index] === 'i') {
      result = result.replace('i', '3');
    } else if (string[index] === 'o') {
      result = result.replace('o', '4')
    } else if (string[index] === 'u') {
      result = result.replace('u', '5')
    }
  }
  return result;
}
function decode(string) {
  let result = string;
  for (let index in string) {
    if (string[index] === '1') {
      result = result.replace('1', 'a');
    } else if (string[index] === '2') {
      result = result.replace('2', 'e');
    } else if (string[index] === '3') {
      result = result.replace('3', 'i');
    } else if (string[index] === '4') {
      result = result.replace('4', 'o')
    } else if (string[index] === '5') {
      result = result.replace('5', 'u')
    }
  }
  return result;
}

// Desafio 10

function techList(tecnologia, pessoa) {
  if (tecnologia.length === 0) {
    return 'Vazio!';
  }
  let objeto = [];
  tecnologia = tecnologia.sort();
  for (let index = 0; index < tecnologia.length; index += 1) {
    let result = {
      tech: tecnologia[index],
      name: pessoa
    }
    objeto.push(result);
  }
  return objeto;
}

// Desafio 11
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } else result = false;
  return result;
}