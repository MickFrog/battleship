const DOM_Elements = {
    humanBoard: document.getElementById('humanBoard'),
    compBoard: document.getElementById('compBoard'),
    placingBoard: document.getElementById('placingBoard'),
    axisBtn: document.getElementById('axisBtn'),
    shipToPlace: document.getElementById('shipToPlace'),
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

export {DOM_Elements, drawPositions};