const DOM_Elements = {
    humanBoard: document.getElementById('humanBoard'),
    compBoard: document.getElementById('compBoard'),
    placingBoard: document.getElementById('placingBoard'),
}

function drawPositions(boardElem, bhover=false) {
    for (let i = 65; i < 75; i++) {
        let boardRow = createRow();

        for (let j = 0; j < 10; j++) {
            let newBox = createBox(bhover);
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

function createBox(bhover=false) {
    let newBox = document.createElement('div');

    newBox.className = 'box';

    //to cater for hover on only compBoard boxes
    if (bhover) newBox.classList.add('hoverBox'); 

    return newBox;
}

function addBoxEvents(boxElem) {
    
}

export default function initializeBoards() {
    drawPositions(DOM_Elements.humanBoard);
    drawPositions(DOM_Elements.compBoard, true);
    drawPositions(DOM_Elements.placingBoard, true);
}
