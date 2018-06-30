// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


/* Variables to get canvas element,height,width */

const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const sizePicker = document.querySelector('#sizePicker');
const canvas = document.getElementById('pixelCanvas');

sizePicker.addEventListener('submit', function (e) {
  e.preventDefault()
  makeGrid()
});

function makeGrid() {
  const height = inputHeight.value;
  const width = inputWidth.value;
  /* clear the previous table before creating a new one */
  canvas.innerHTML = '';

  /* An event listener such that whenever any cell is clicked it calls addEvent function and changes it's color.*/
  let eventClick = function (click) {
    click.addEventListener('click', function (event) {
      var color = document.querySelector('input#colorPicker').value;
      var click = document.querySelector('td');
      this.style.backgroundColor = color;
    })
  };


  for (let i = 0; i < height; i++) {
    let row = canvas.insertRow(i);
    for (let j = 0; j < width; j++) {
      let click = row.insertCell(j);
      click.addEventListener('click', eventClick(click));
    }
  }
}
;