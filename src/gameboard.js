class Gameboard {
    gameBoard = new Map(); //maps board positions to whether [ship, isClicked?]

    constructor() {
        this.#drawBoard();
    }

    #drawBoard() {
        for(let i = 65; i < 75; i++){ // A to J
            let letter = String.fromCharCode(i);

            for(let j = 0; j < 10; j++) {
                this.gameBoard.set(`${letter}${j}`, [null, false]);
            }
        }
    }
}