import { placingElements, addPlacingEvents } from "./placeShip";

const DOM_Elements = {
    humanBoard: document.getElementById('humanBoard'),
    compBoard: document.getElementById('compBoard'),
}

function drawPositions(boardElem, bhover=false) {
    for (let i = 65; i < 75; i++) {

        for (let j = 0; j < 10; j++) {
            let newBox = createBox(bhover);
            newBox.id = `${String.fromCharCode(i)}${j}`;
            boardElem.appendChild(newBox);
        }
    }
}

function createBox(bhover=false) {
    let newBox = document.createElement('div');

    newBox.className = 'box';

    //to cater for hover on only compBoard boxes
    if (bhover) newBox.classList.add('hoverBox'); 

    return newBox;
}

export default function initializeBoards() {
    drawPositions(DOM_Elements.humanBoard);
    drawPositions(DOM_Elements.compBoard, true);
    drawPositions(placingElements.placingBoard);
    addPlacingEvents();
}
