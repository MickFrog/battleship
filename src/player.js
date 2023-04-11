import Gameboard from "./gameboard";

export default class Player {

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

    #shuffleArray(myArr) {
        let currIndex = myArr.length, randomIndex;

        while (currIndex != 0) { //while elements still left to shuffle
            //pick a random element
            randomIndex = Math.floor(Math.random() * currIndex);
            currIndex--;

            //swap random element with current element
            [myArr[currIndex], myArr[randomIndex]] = [myArr[randomIndex], myArr[currIndex]];
        }
        return myArr;
    }

    #chooseShot() {
        //shuffle possibleMoves
        this.#shuffleArray(this.possibleMoves);

        //pop move
        return this.possibleMoves.pop();
    }

    castShot(oppBoard) {
        const myShot = this.#chooseShot();

        oppBoard.receiveAttack(myShot);
    }
}