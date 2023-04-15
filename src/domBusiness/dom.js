const DOM_Elements = {
    humanBoard: document.getElementById('humanBoard'),
    compBoard: document.getElementById('compBoard'),
    placingBoard: document.getElementById('placingBoard'),
}

const placingUtil = {
    shipLengths: [5, 4, 3, 3, 2],
    currShipLen: 0,
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

function addPlacingEvents() { //add hover events to all placingBoard boxes
    let placingBoxes = [...DOM_Elements.placingBoard.childNodes]; 

    for (let i = 0; i < placingBoxes.length; i++) {
        placingBoardEvents(placingBoxes[i]);
    }
}

function createBox(bhover=false) {
    let newBox = document.createElement('div');

    newBox.className = 'box';

    //to cater for hover on only compBoard boxes
    if (bhover) newBox.classList.add('hoverBox'); 

    return newBox;
}

function placingBoardEvents(boxElem) {
    //Hover effects 
    boxElem.addEventListener('mouseenter', () => {
        let locations = generateLocations(boxElem.id); //generate locations from currBox to last box of ship
        
        if (isValidPlacing(locations)) {
            setHovered(locations, true);
        }
    });

    boxElem.addEventListener('mouseleave', () => {
        const locations = generateLocations(boxElem.id);
        setHovered(locations);
    });
}

function generateLocations(elemID) {
    let locations = [];
    let shipLength = placingUtil.shipLengths[placingUtil.currShipLen];
        
    if (9 - parseInt(elemID[1]) + 1 >= shipLength) { //if ship can fit horizontally
        //generate locations
        for (let i = 0; i < shipLength; i++) {
            locations.push(`${elemID[0]}${parseInt(elemID[1]) + i}`);
        }
    }
    return locations;
}

function setHovered(posArray, bSwitch=false) {
    if (posArray.length < 1) return;

    const placingBoardChildren = [...DOM_Elements.placingBoard.children];
    if (bSwitch) {
        for (let i = 0; i < posArray.length; i++) {
            const currBox = placingBoardChildren.find(element => element.id == posArray[i]);
            currBox.classList.add('shipHover');
        }
        return;
    }

    for (let i = 0; i < posArray.length; i++) {
        const currBox = placingBoardChildren.find(element => element.id == posArray[i]);
        currBox.classList.remove('shipHover');
    }
}

function isValidPlacing(posArray) {
    return true;
}

export default function initializeBoards() {
    drawPositions(DOM_Elements.humanBoard);
    drawPositions(DOM_Elements.compBoard, true);
    drawPositions(DOM_Elements.placingBoard);
    addPlacingEvents();
}
