import Ship from "./ship";

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

    placeShip(shipName, shipLength, shipCoords) {
        let newShip = new Ship(shipName, shipLength);

        for (let pos of shipCoords) {
            this.gameBoard.set(pos, [newShip, false]);
        }

        this.boardShips.push(newShip);
    } 

    receiveAttack(pos) {
        let [currShip, isHit] = this.gameBoard.get(pos);
        
        if(isHit === true) return 0; //prevent hitting twice

        if(currShip !== null) { //record hit on ship hit
            currShip.hit();
        }

        isHit = true;
        this.gameBoard.set(pos, [currShip, isHit]); //update position  
        return 1;      
    } 
}