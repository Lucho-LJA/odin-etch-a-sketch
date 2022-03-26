//variables html
const boardContainer = document.querySelector('#board-selector');
//genral variables
const boardWidth = 60;
const boardHeight = 60;
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
function changeColor(){
    this.style.backgroundColor=colorCell;
    alert(otr);
}
createGrid();

