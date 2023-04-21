import { players } from "./gameHandler"

const gameUtil = {
    switchPlayer: () => {
        players.activePlayer == players.humanPlayer 
        ? players.activePlayer = players.compPlayer
        : players.activePlayer = players.humanPlayer
    },

    gameWon: () => { //return winner of game
        if (players.humanPlayer.playerBoard.boardShips.length == 0) {
            return players.compPlayer;
        }

        if (players.compPlayer.playerBoard.boardShips.length == 0) {
            return players.humanPlayer;
        }
        
        return null;
    },
}

export default gameUtil;