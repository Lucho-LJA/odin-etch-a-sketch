//variables html
const boardContainer = document.querySelector('#board-container');
const resetButton = document.querySelector('#reset');
const clearButton = document.querySelector('#clear');
const inputColor = document.querySelector('#input-color');
const inputColums = document.querySelector('#input-colums');
const inputRows = document.querySelector('#input-rows');
const inputPencil = document.querySelector('#pencil');
const inputEraser = document.querySelector('#eraser');
const inputNormal = document.querySelector('#normal');
const inputRandom = document.querySelector('#random');
const inputOpacity = document.querySelector('#opacity');


//genral variables
const boardWidth = 50;
const boardHeight = 50;
const nColumsDefault = 16;
const nRowsDefault = 16;
const colorCellDefault = 'rgb(0, 0, 0, 1)';
let colorCell = colorCellDefault;
let isPencilActive = true;
let drawTypeOption = 1;

//functions
function getRandomColor(){
    let r=0;
    let g=0;
    let b=0;
    r=Math.floor(Math.random() * 255) + 0;
    g=Math.floor(Math.random() * 255) + 0;
    b=Math.floor(Math.random() * 255) + 0;
    return `rgb(${r},${g},${b})`;
}
function createGrid(nColums=nColumsDefault,nRows=nRowsDefault){
    const cellWidth = boardWidth/nRows + "rem";
    const cellHeight = boardHeight/nColums +"rem";
    const boardContainer = document.querySelector('#board-container');
    
    let cellRows = [];
    for (let i = 0; i < nRows; i++) {
        cellRows[i] = document.createElement('div');
        const cellRowsAtribute = document.createAttribute('class');
        cellRowsAtribute.value = 'cellRows';
        cellRows[i].setAttributeNode(cellRowsAtribute);
        boardContainer.appendChild(cellRows[i])
        for (let j = 0; j < nColums; j++) {
            const cell = document.createElement('div');
            const cellAtribute = document.createAttribute('class');
            cellAtribute.value = 'cell';
            cell.setAttributeNode(cellAtribute);
            const cellStyle = document.createAttribute('style');
            cellStyle.value = `width: ${cellWidth}; height: ${cellHeight};`;
            cell.setAttributeNode(cellStyle);
            cellRows[i].appendChild(cell);
        }
        
    }
    console.log('grid has been created');
    let cells = document.querySelectorAll(".cell");
    cells.forEach(oneCell => oneCell.addEventListener("mouseover", changeColor));
}

//events
inputColor.addEventListener('change', changeColorCell);
inputColor.addEventListener('input', changeColorCell);
resetButton.addEventListener('click',resetBoard);
clearButton.addEventListener('click',clearBoard);
inputColums.addEventListener('input',changeGrid);
inputRows.addEventListener('change',changeGrid);
inputPencil.addEventListener('change',changePencilType);
inputEraser.addEventListener('change',changePencilType);
inputNormal.addEventListener('input',changeDrawType);
inputRandom.addEventListener('input',changeDrawType);
inputOpacity.addEventListener('input',changeDrawType);

window.addEventListener('DOMContentLoaded', (event) => {
    createGrid();
});



//event functions
function changeDrawType(){
    switch (this.value) {
        case 'normal':
            drawTypeOption=1;
            break;
        case 'random':
            drawTypeOption=2;
            break;
        case 'opacity':
            drawTypeOption=3;
            break;
        default:
            drawTypeOption=0;
            break;
    }
}
function changePencilType(){
    isPencilActive = !isPencilActive;
}
function changeGrid(){
    if (inputColums.value>100){
        nColums =100;
        inputColums.value=100;
    }else if (inputColums.value<1){
        nColums =1;
        inputColums.value=1;
    }else{
        nColums =inputColums.value;
    }
    if (inputRows.value>100){
        nRows =100;
        inputRows.value=100;
    }else if (inputRows.value<1){
        nRows =1;
        inputRows.value=1;
    }else{
        nRows =inputRows.value;
    }
    const element = document.getElementById("board-container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    createGrid(nColums,nRows);
    console.log('changed grid')
}

function clearBoard(){
    const element = document.querySelectorAll('.cell');
    element.forEach(addColorOpacity);
    console.log('cleared board');
}
function addColorOpacity(element,index,array){
    element.style.backgroundColor='rgb(0,0,0,0)';
    element.style.opacity =0;
}

function resetBoard(){
    nColums = nColumsDefault;
    nRows = nRowsDefault;
    colorCell = colorCellDefault;
    const element = document.getElementById("board-container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    createGrid();
    inputColums.value=nColumsDefault;
    inputRows.value=nRowsDefault;
    console.log('reseted board');
}

function changeColorCell(){
        colorCell = this.value;
        console.log(`changed color to ${colorCell}`)
    
}
function changeColor(){
    if (isPencilActive){
        if (drawTypeOption==1){
            this.style.backgroundColor=colorCell;
        }else if (drawTypeOption==2){
            this.style.backgroundColor=getRandomColor();
        }else if (drawTypeOption==3){
            let opacityCell=window.getComputedStyle(this).getPropertyValue("opacity");
            
            if (opacityCell == 1){
                opacityCell = 0.1;
                console.log(opacityCell);
            }else if (opacityCell <0.9){
                opacityCell = Number(opacityCell) + 0.1;
            }else{
                opacityCell = 0.9999;
            }
            this.style.backgroundColor=colorCell;
            this.style.opacity = opacityCell;
            console.log(window.getComputedStyle(this).getPropertyValue("opacity"));
        }
        
        console.log('color events have been created');
    }else{
        this.style.opacity =0;
        this.style.backgroundColor='white';
        console.log(window.getComputedStyle(this).getPropertyValue("opacity"));
        console.log(`erasered cell`)
    }
}





