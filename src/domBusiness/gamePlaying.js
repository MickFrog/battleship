import { DOM_Elements, drawPositions, addBoardEvents } from "./domUtil";
import gameUtil from "../gameUtil";
import { players } from "../gameHandler";

export default function initializePlayingBoards() {
    drawPositions(DOM_Elements.humanBoard);

    drawPositions(DOM_Elements.compBoard, true);
    addBoardEvents(DOM_Elements.compBoard, compBoardEvents);
}

//eventHandlers
DOM_Elements.restartBtn.addEventListener('click', () => {
    //reload page to restart game
    location.reload();
});

function compBoardEvents(boxElem) {
    boxElem.addEventListener('click', () => {
        if (players.activePlayer == players.humanPlayer) { //if human is active player
            let shotMade = players.humanPlayer.castShot(players.compPlayer, boxElem.id);
            boxElem.classList.remove('hoverBox');
    
            handleShot(shotMade, boxElem);

            gameUtil.switchPlayer();
        }
        handleAIShot();
        
        let winner = gameUtil.gameWon();
        if (winner != null) {
            evaluateWin(winner);
        }
    }); 
}

function handleShot(shotResult, shotBox) {
    if (shotResult === -1) return;

    if (shotResult === 0) {
        shotBox.classList.add('missedBox');
        return;
    }
    //when shot made at ship
    shotBox.classList.add('hitBox');
}

function handleAIShot() {
    if (players.activePlayer == players.compPlayer) {
        //cast AI player shot
        let [shotMade, shotResult] = players.compPlayer.castShot(players.humanPlayer);
    
        //get box shot in html
        let humanBoardChildren = [...DOM_Elements.humanBoard.children];
        const boxShot = humanBoardChildren.find(elem => elem.id == shotMade);
    
        handleShot(shotResult, boxShot);
    
        gameUtil.switchPlayer();
    }
}

function evaluateWin(myWinner) {
    DOM_Elements.overlay.style.display = 'flex';
    DOM_Elements.winDiv.style.display = 'flex';
    
    if (myWinner == players.humanPlayer) {
        //display human win msg
        DOM_Elements.winMsg.textContent = 'You Won! Congratulations';
    }

    if (myWinner == players.compPlayer) {
        //display computer win message
        DOM_Elements.winMsg.textContent = 'You Lost!';
    }
}