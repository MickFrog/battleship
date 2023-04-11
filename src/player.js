import Gameboard from "./gameboard";

class Player {

    playerBoard = new Gameboard;
    possibleMoves = []; //all the possible moves left

    constructor() {
        //generate possible moves
        this.#generateMoves();
    }

    #generateMoves() {
        for(let i = 65; i < 75; i++){ // A to J
            let letter = String.fromCharCode(i);

            for(let j = 0; j < 10; j++) {
                this.possibleMoves.push(`${letter}${j}`);
            }
        }
    }

    #shuffleArray() {
        
    }

    #chooseShot() {
        //shuffle possibleMoves
        //pop move
    }

    castShot(oppBoard) {

    }
}