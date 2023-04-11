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

    receiveAttack(pos) {
        let [currShip, isHit] = this.gameBoard.get(pos);
        
        if(isHit === true) return 'Invalid'; //prevent hitting twice

        let msg = 'Miss';
        if(currShip !== null) { //record hit on ship
            currShip.hit();
            msg = currShip.name + ' has been hit';

            if (currShip.isSunk()) { //remove sunk ships from board ships
                this.boardShips = this.boardShips.filter(bShip => bShip !== currShip);
                msg = currShip.name + ' has been sunk';
            }
        }

        isHit = true;
        this.gameBoard.set(pos, [currShip, isHit]); //update position  
        return msg;      
    } 

}