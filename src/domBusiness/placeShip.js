import { DOM_Elements, drawPositions, addBoardEvents } from "./domUtil";
import { players } from "../gameHandler";

const placingUtil = {
    shipsToPlace: 
        [{name: 'Carrier', len: 5}, 
        {name: 'BattleShip', len: 4}, 
        {name: 'Cruiser', len: 3}, 
        {name: 'Submarine', len: 3},
        {name: 'Destroyer', len: 2}],
    currShip: 0,
    currAxis: 'x',
}

//Event handlers
DOM_Elements.axisBtn.addEventListener('click', () => {
    placingUtil.currAxis == 'x' 
    ? placingUtil.currAxis = 'y' 
    : placingUtil.currAxis = 'x';

});

function placingBoardEvents(boxElem) {
    let locations = [];
    //Hover effects 
    boxElem.addEventListener('mouseenter', () => {
        if (placingUtil.currShip > 4) return; //prevent choosing non-existent ships

        locations = generateLocations(boxElem.id, placingUtil.currAxis); //generate locations from currBox to last box of ship
        
        if (isValidPlacing(locations)) {
            setHovered(locations, true);
        }
    });

    boxElem.addEventListener('mouseleave', () => {
        if (placingUtil.currShip > 4) return; //prevent choosing non-existent ships

        setHovered(locations);
    });

    boxElem.addEventListener('click', () => {
        if (placingUtil.currShip > 4) return; //prevent choosing non-existent ships

        if (isValidPlacing(locations)) {
            addShipToBoard(locations);
        }

        if (placingUtil.currShip > 4) { //when the last ship is placed
            //set placing Board elements to humanBoard elements
            DOM_Elements.humanBoard.replaceChildren(...DOM_Elements.placingBoard.children);

            DOM_Elements.overlay.style.display = 'none';
            DOM_Elements.startDiv.style.display = 'none';
        }
    })
}

function addShipToBoard(locations) {
    //logically place ships
    players.activePlayer.playerBoard.placeShip(placingUtil.shipsToPlace[placingUtil.currShip].name, 
    placingUtil.shipsToPlace[placingUtil.currShip].len, 
    locations);

    //increment currShip
    placingUtil.currShip++;
    if (placingUtil.shipsToPlace[placingUtil.currShip]) { //Prevent breaking when last ship is reached
        DOM_Elements.shipToPlace.textContent = placingUtil.shipsToPlace[placingUtil.currShip].name;
    }

    setClicked(locations); //visually place ships
}

function generateLocations(elemID, axis) {
    let locations = [];
    let shipLength = placingUtil.shipsToPlace[placingUtil.currShip].len;

    if (axis == 'x') {
        if (9 - parseInt(elemID[1]) + 1 >= shipLength) { //if ship can fit horizontally
            //generate locations
            for (let i = 0; i < shipLength; i++) {
                locations.push(`${elemID[0]}${parseInt(elemID[1]) + i}`);
            }
        }
    }    
    
    if (axis == 'y') {
        if((74 - elemID.charCodeAt(0)) + 1 >= shipLength) {
            let tempCharCode = elemID.charCodeAt(0);
            //generate locations
            for (let i = 0; i < shipLength; i++) {
                locations.push(`${String.fromCharCode(tempCharCode + i)}${parseInt(elemID[1])}`);
            }
        }
    }
    return locations;
}

function setHovered(posArray, bSwitch=false) { //bSwitch controls on and off of hover
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

function setClicked(posArray) {
    if (posArray.length < 1) return;

    const placingBoardChildren = [...DOM_Elements.placingBoard.children];
    for (let i = 0; i < posArray.length; i++) {
        const currBox = placingBoardChildren.find(element => element.id == posArray[i]);
        currBox.classList.add('shipBox');
    }
}

function isValidPlacing(posArray) {
    return players.activePlayer.checkValidity(posArray);
}

export default function initializePlacingBoards() {
    drawPositions(DOM_Elements.placingBoard);
    addBoardEvents(DOM_Elements.placingBoard, placingBoardEvents);
}