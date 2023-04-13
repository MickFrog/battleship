const DOM_Elements = {
    humanBoard: document.getElementById('humanBoard'),
    compBoard: document.getElementById('compBoard'),
}

function drawPositions(boardElem) {
    for (let i = 65; i < 75; i++) {
        let boardRow = createRow();

        for (let j = 0; j < 10; j++) {
            let newBox = createBox();
            newBox.setAttribute('boxID', `${String.fromCharCode(i)}${j}`);
            boardRow.appendChild(newBox);
        }

        boardElem.appendChild(boardRow);
    }
}

function createRow() {
    let newRow = document.createElement('div');

    newRow.style.display = 'flex';
    newRow.style.margin = '0';

    return newRow;
}

function createBox() {
    let newBox = document.createElement('div');

    newBox.style.margin = '0';
    newBox.style.border = '1px solid black';
    newBox.style.width = '50px';
    newBox.style.height = '50px';
    newBox.className = 'box';

    return newBox;
}

function addBoxEvents(boxElem) {
    
}

export default function initializeBoards() {
    drawPositions(DOM_Elements.humanBoard);
    drawPositions(DOM_Elements.compBoard);
}
