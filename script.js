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

function changeGrid(e)
{

    //repositioning changegrid button properly
    let buttons = document.querySelector('.buttons');
    buttons.style.marginLeft = '220px';


    let grid = document.querySelector('.grid');

    //remove rows so we can replace grid everytime button is clicked
    if (grid.children.length > 0)
    {
        removeChildren(grid);
    }

    //processing input
    let gridNumber;
    do
    {
        gridNumber = Number(prompt("Enter a grid size", "16 = 16 x 16"));
    }
    while (isNaN(gridNumber));

    //calculating starting size of each tile in grid
    let tileSize = Math.floor((1220 / gridNumber) - 4);

    //nested for loops to create rows and columns
    for (let i = 0; i < gridNumber; i++)
    {
        let row = document.createElement("div");
        row.className = 'row';

        for (let j = 0; j < gridNumber; j++)
        {
            let column = document.createElement("div");
            column.className = 'column';
            //column.id = '0'; this was used when adding 10 percent black everytime we hovered over a tile
            column.style.width = tileSize.toString() + "px";
            column.style.height = tileSize.toString() + "px";

            row.appendChild(column);
        }

        grid.appendChild(row);
    }

    //remove justify content center so that page is displayed properly when grid is made
    allContent.style.justifyContentt = '';

    //function that puts everything in place when grid appears or changes type
    displaySideContent();
}

function enableColoring(e)
{

    let enabledValueDiv = document.getElementById('enabled-value');
    if (clicked === true)
    {
        currentGrid.addEventListener('mouseover', changeTileColor);
        enabledValueDiv.textContent = 'Enabled';
        clicked = false;
    }
    else
    {
        currentGrid.removeEventListener('mouseover', changeTileColor);
        enabledValueDiv.textContent = 'Disabled';
        clicked = true;
    }
}

function chooseColor(e)
{
    let displayColorChoice = document.getElementById('display-color-choice');
    let classNames = e.target.classList;
    classNames.forEach(name => {
        if (name === 'color-column' || name === 'display-colors')
        {
            globalRGBValue = getComputedStyle(e.target).backgroundColor;
            displayColorChoice.style.backgroundColor = globalRGBValue;
        }
    })
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
