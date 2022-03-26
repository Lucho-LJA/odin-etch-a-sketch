//variables html
const boardContainer = document.querySelector('#board-selector');
const resetButton = document.querySelector('#reset');
const clearButton = document.querySelector('#clear');
const inputColor = document.querySelector('#input-color');
const inputColums = document.querySelector('#input-colums');
const inputRows = document.querySelector('#input-rows');

//genral variables
const boardWidth = 50;
const boardHeight = 50;
let colorCell = 'rgb(0, 0, 0)';

//functions
function createGrid(nColums=16,nRows=16){
    const cellWidth = boardWidth/nColums + "rem";
    const cellHeight = boardHeight/nRows +"rem";
    const boardContainer = document.querySelector('#board-container');
    let cellRows = [];
    for (let i = 0; i < nRows; i++) {
        cellRows[i] = document.createElement('div');
        const cellRowsAtribute = document.createAttribute('class');
        cellRowsAtribute.value = 'cellRows';
        boardContainer.setAttributeNode(cellRowsAtribute);
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

window.addEventListener('DOMContentLoaded', (event) => {
    createGrid();
});



//event functions
function changeColorCell(){
    colorCell = this.value;
    console.log(`changed color to ${colorCell}`)
}
function changeColor(){
    this.style.backgroundColor=colorCell;
    console.log('color events have been created');
}




