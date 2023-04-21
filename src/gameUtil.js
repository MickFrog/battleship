import { players } from "./gameHandler"

export default gameUtility = {
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