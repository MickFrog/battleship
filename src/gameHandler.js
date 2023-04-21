import { Player, AI_Player } from "./player";
import initializeBoards from './domBusiness/dom';

export const players = {
    humanPlayer: null,
    compPlayer: null,
    activePlayer: null,
}

function initializePlayers() {
    players.humanPlayer = new Player();
    players.compPlayer = new AI_Player();

    players.activePlayer = players.humanPlayer;
}

export function initializeGame() {
    initializePlayers();
    initializeBoards();
}