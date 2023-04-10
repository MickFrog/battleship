export default class Ship {
    length;
    hits = 0;
    shipSunk = false;

    constructor(shipLength) {
        this.length = shipLength;
    }

    hit() {
        if (this.shipSunk == true) return 0;

        this.hits++;

        if (this.isSunk()) {
            this.shipSunk = true;
        }
        return 1;
    }

    isSunk() {
        if(this.hits >= this.length) return true;

        return false;
    }
}
