// Main Body
let clicked = true;
let globalRGBValue = '';

let currentGrid = document.querySelector('.grid');


//Turn coloring on and off when user clicks on grid
currentGrid.addEventListener('click', enableColoring);


//Event listener for change grid button
let gridTypeButton = document.getElementById('choose-grid');
gridTypeButton.addEventListener('click', changeGrid);


//centering page on startup, will change when grid is added
let allContent = document.querySelector('.content');
allContent.style.justifyContentt = 'center';

//Event listener for choosing colors from color pallete
let colorPickingGrid = document.querySelector('.color-picking-grid');
colorPickingGrid.addEventListener('click', chooseColor);
