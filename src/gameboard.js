import Ship from "./ship";

export default class Gameboard {
    gameBoard = new Map(); //maps board positions to whether [ship, isClicked?]

    boardShips = [];

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

    placeShip(shipName, shipLength, shipCoords) {
        let newShip = new Ship(shipName, shipLength);

        for (let pos of shipCoords) {
            this.gameBoard.set(pos, [newShip, false]);
        }

        this.boardShips.push(newShip);
    } 

    receiveAttack(pos) { //-1 - invalid; 0 - miss; 1 - hit
        let [currShip, isHit] = this.gameBoard.get(pos);
        
        if(isHit === true) return -1; //prevent hitting twice

        let msg = 0;
        if(currShip !== null) { //record hit on ship
            currShip.hit();
            msg = 1;

            if (currShip.isSunk()) { //remove sunk ships from board ships
                this.boardShips = this.boardShips.filter(bShip => bShip !== currShip);
            }
        }

        isHit = true;
        this.gameBoard.set(pos, [currShip, isHit]); //update position  
        return msg;      
    } 

}