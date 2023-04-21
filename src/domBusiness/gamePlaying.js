import { DOM_Elements, drawPositions, addBoardEvents } from "./domUtil";
import { players } from "../gameHandler";

export default function initializePlayingBoards() {
    drawPositions(DOM_Elements.humanBoard);

    drawPositions(DOM_Elements.compBoard, true);
    addBoardEvents(DOM_Elements.compBoard, compBoardEvents);
}

function compBoardEvents(boxElem) {
    boxElem.addEventListener('click', () => {
        let shotMade = players.humanPlayer.castShot(players.compPlayer, boxElem.id);
        boxElem.classList.remove('hoverBox');

        if (shotMade === -1) return;

        if (shotMade === 0) {
            boxElem.classList.add('missedBox');
            return;
        }
        //when shotMade at ship
        boxElem.classList.add('hitBox');
    }); 
}