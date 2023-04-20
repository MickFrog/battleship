import { Player, AI_Player } from "./player";
import gameUtility from "./gameUtil";

export const players = {
    humanPlayer: new Player(),
    compPlayer: new AI_Player(),
}

//Initialize players
gameUtility.activePlayer = players.humanPlayer;