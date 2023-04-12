import Gameboard from "./gameboard";

export class Player {
    playerBoard = new Gameboard;

    castShot(oppBoard, playerShot) { 

        return oppBoard.receiveAttack(playerShot);
    }
}

export class AI_Player extends Player {
    possibleMoves = []; //all the possible moves left

    constructor() {
        super();
        this.#generateMoves(); //generate possible moves
        this.#placeRandomShips();
    }

    castShot(oppBoard) {
        const playerShot = this.#chooseShot();

        return super.castShot(oppBoard, playerShot);
    }

    #placeRandomShips() {
        //get placements for the 5 ships
        const carrierPos = this.#randomizeShip(5);
        const battleshipPos = this.#randomizeShip(4);
        const cruiserPos = this.#randomizeShip(3);
        const submarinePos = this.#randomizeShip(3);
        const gunnerPos = this.#randomizeShip(2);

        //create ships for player
        this.playerBoard.placeShip('Carrier', 5, carrierPos);
        this.playerBoard.placeShip('Battleship', 4, battleshipPos);
        this.playerBoard.placeShip('Cruiser', 3, cruiserPos);
        this.playerBoard.placeShip('Submarine', 3, submarinePos);
        this.playerBoard.placeShip('Gunner', 2, gunnerPos);
    }

    #randomizeShip(shipLength) { // This is for placing ships on the AI board.
        const axes = ['x', 'y']; 
        const currAxis = axes[Math.floor(Math.random() * axes.length)];

        let newPlace = [];
        if (currAxis == 'x') { //get a valid ship placement on x axis
            let isValid = false;
            while (!isValid) {
                newPlace = this.#randomHorizontal(shipLength);

                if (this.#checkValidity(newPlace)) {
                    isValid = true;
                }  
            }
        }

        if (currAxis == 'y') { // get a random ship placement on y axis
            let isValid = false;
            while (!isValid) {
                newPlace = this.#randomVertical(shipLength);

                if (this.#checkValidity(newPlace)) {
                    isValid = true;
                }
            }
        }

        return newPlace;
    }

    #randomHorizontal(shipLength) {
        let positions = [];
        
        //generate random letter from A(65) to J(74) 
        const currLetterCode = Math.floor(Math.random() * (74 - 65 + 1)) + 65; 
        const currLetter = String.fromCharCode(currLetterCode);

        //generate random number between 0 and (10-shipLength)
        let currNumber = Math.floor(Math.random() * (10 - shipLength));

        //generate positions for the horizontal line.
        for (let i = 0; i < shipLength; i++) {
            positions.push(`${currLetter}${currNumber}`);
            currNumber++;
        }

        return positions;
    }

    #randomVertical(shipLength) {
        let positions = [];

        //generate random number between 0 and 10
        const currNumber = Math.floor(Math.random() * 10);

        //generate random letter from A(65) to J-shipLength(74-shipLength)
        let currLetterCode = Math.floor(Math.random() * ((74 - shipLength) - 65 + 1)) + 65;
        
        //generate positions for vertical ship placement
        for (let i = 0; i < shipLength; i++) {
            positions.push(`${String.fromCharCode(currLetterCode)}${currNumber}`);
            currLetterCode++;
        }
        return positions;
    }

    #generateMoves() {
        for(let i = 65; i < 75; i++){ // A to J
            let letter = String.fromCharCode(i);

            for(let j = 0; j < 10; j++) {
                this.possibleMoves.push(`${letter}${j}`);
            }
        }
    }

    #checkValidity(posArray) { //check if all positions provided are valid
        for(let pos of posArray) {
            if (this.playerBoard.gameBoard.get(pos)[0] != null) {
                return false;
            }
        }
        return true;
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
}