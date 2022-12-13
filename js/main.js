const all_span = document.querySelectorAll('.spans');
const span_width1 = document.querySelectorAll('.spans-width1');
const span_width2 = document.querySelectorAll('.spans-width2');
const span_width3 = document.querySelectorAll('.spans-width3');
const span_width4 = document.querySelectorAll('.spans-width4');
const span_width5 = document.querySelectorAll('.spans-width5');
const span_width6 = document.querySelectorAll('.spans-width6');
const span_width7 = document.querySelectorAll('.spans-width7');
const span_width8 = document.querySelectorAll('.spans-width8');
const span_height1 = document.querySelectorAll('.spans-height1');
const span_height2 = document.querySelectorAll('.spans-height2');
const span_height3 = document.querySelectorAll('.spans-height3');
const span_height4 = document.querySelectorAll('.spans-height4');
const span_height5 = document.querySelectorAll('.spans-height5');
const span_height6 = document.querySelectorAll('.spans-height6');
const span_height7 = document.querySelectorAll('.spans-height7');
const span_height8 = document.querySelectorAll('.spans-height8');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const arr = [];
arr.push(span_width1, span_width2, span_width3, span_width4, span_width5, span_width6, span_width7, span_width8);
console.log(arr);
function render() {
  for (let i = 0; i < 9; i++) {
    if (i == 0) {
    }
    else if (i % 2 == 1) {
      span_width1[i - 1].style.backgroundColor = '#FBCE9C';
      span_width5[i - 1].style.backgroundColor = '#FBCE9C';
      span_width7[i - 1].style.backgroundColor = '#FBCE9C';
      span_width3[i - 1].style.backgroundColor = '#FBCE9C';
      span_width2[i].style.backgroundColor = '#FBCE9C';
      span_width4[i].style.backgroundColor = '#FBCE9C';
      span_width6[i].style.backgroundColor = '#FBCE9C';
      span_width8[i].style.backgroundColor = '#FBCE9C';
    }
    else if (i % 2 == 0) {
      span_width1[i - 1].style.backgroundColor = '#D38D47';
      span_width5[i - 1].style.backgroundColor = '#D38D47';
      span_width7[i - 1].style.backgroundColor = '#D38D47';
      span_width3[i - 1].style.backgroundColor = '#D38D47';
      span_width2[i - 2].style.backgroundColor = '#D38D47';
      span_width4[i - 2].style.backgroundColor = '#D38D47';
      span_width6[i - 2].style.backgroundColor = '#D38D47';
      span_width8[i - 2].style.backgroundColor = '#D38D47';
    }
  }
}
render()
button1.addEventListener('click', () => {
  button2.style.border = '', button3.style.border = '', button4.style.border = '', button1.style.border = '5px solid rgb(144, 122, 81)';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j].addEventListener('mouseover', () => {
        render()
        arr[i][j].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
        tura(i, j)
        fel(i, j)
      })
    }
  }
})
function fel(i, j) {
  for (let l = 1; l < 16; l++) {
    if (arr[i - l]) {
      if (arr[i - l][j + l]) {
        arr[i - l][j + l].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
      }
    }
  }
  for (let l = 16; l > 0; l--) {
    if (arr[i + l]) {
      if (arr[i + l][j - l]) {
        arr[i + l][j - l].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
      }
    }
  }
  for (let l = 1; l < 16; l++) {
    if (arr[i - l]) {
      if (arr[i - l][j - l]) {
        arr[i - l][j - l].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
      }
    }
  }
  for (let l = 1; l < 16; l++) {
    if (arr[i + l]) {
      if (arr[i + l][j + l]) {
        arr[i + l][j + l].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
      }
    }
  }
}
button2.addEventListener('click', () => {
  button2.style.border = '5px solid rgb(144, 122, 81)', button3.style.border = '', button4.style.border = '', button1.style.border = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j].addEventListener('mouseover', () => {
        render()
        arr[i][j].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
        fel(i, j)
      })
    }
  }
})
button3.addEventListener('click', () => {
  button2.style.border = '', button3.style.border = '5px solid rgb(144, 122, 81)', button4.style.border = '', button1.style.border = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j].addEventListener('mouseover', () => {
        render()
        arr[i][j].style.backgroundColor = 'rgba(57, 181, 230, 0.233)';
        if (arr[i - 2]) {
          if (arr[i - 2][j + 1]) {
            arr[i - 2][j + 1].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
          }}
        if (arr[i - 1]) {
          if (arr[i - 1][j - 2]) {
            arr[i - 1][j - 2].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
          }}
        if (arr[i - 1]) {
          if (arr[i - 1][j + 2]) {
            arr[i - 1][j + 2].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
          }}
        if (arr[i + 2]) {
          if (arr[i + 2][j + 1]) {
            arr[i + 2][j + 1].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
          }}
        if (arr[i + 2]) {
          if (arr[i + 2][j - 1]) {
            arr[i + 2][j - 1].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
          }}
        if (arr[i + 1]) {
          if (arr[i + 1][j + 2]) {
            arr[i + 1][j + 2].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
          }}
        if (arr[i + 1]) {
          if (arr[i + 1][j - 2]) {
            arr[i + 1][j - 2].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
          }}
        if (arr[i - 2]) {
          if (arr[i - 2][j - 1]) {
            arr[i - 2][j - 1].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
          }
        }
      })
    }
  }
})
button4.addEventListener('click', () => {
  button2.style.border = '', button3.style.border = '', button1.style.border = '', button4.style.border = '5px solid rgb(144, 122, 81)'
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j].addEventListener('mouseover', () => {
        render()
        arr[i][j].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
        tura(i, j)
      })
    }
  }
})
function tura(i, j) {
  for (let k = 0; k < arr[i].length; k++) {
    arr[i][k].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
  }
  for (let l = 0; l < arr.length; l++) {
    arr[l][j].style.backgroundColor = 'rgba(57, 181, 230, 0.233)'
  }
}