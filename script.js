function changeTileColor(e) 
{
    if (e.target.className === 'column')
    {
        e.target.style.backgroundColor = globalRGBValue;
    }

    //CODE FOR RANDOM COLORED TILES

    //let idValue = Number(e.target.id)

    //if (idValue < 10)
    //{
        //idValue++
        //e.target.id = idValue.toString()
    //}

    //let maxRGBValue = Math.round(255/ idValue)
    //let red;
    //let green;
    //let blue;

    //Credit to assembly wizard on stack overflow (How do you get random RGB in javascript)
    //const randomColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

    // if (idValue < 10)
    //{
        //red =  randomColor(30, maxRGBValue)
        //green = randomColor(30, maxRGBValue)
        //blue = randomColor(30, maxRGBValue)
    //}
    //else
    //{
        //red = 0
        //green = 0
        //blue = 0
        //e.target.style.borderColorc = 'white'
    //}

    //const rgbValue = `rgb(${red}, ${green}, ${blue})

    //e.target.style.backgroundColor = globalRGBValue
}


function removeChildren(parent)
{
    while (parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
}













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
