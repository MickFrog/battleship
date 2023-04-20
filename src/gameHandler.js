import { Player, AI_Player } from "./player";
// import gameUtility from "./gameUtil";
import initializeBoards from './domBusiness/dom';

export const players = {
    humanPlayer: new Player(),
    compPlayer: new AI_Player(),
    activePlayer: null,
}

export function initializeGame() {
    initializeBoards();
    //Initialize players
    players.activePlayer = players.humanPlayer;
}