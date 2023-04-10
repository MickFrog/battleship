class Ship {
    length;
    hits = 0;
    shipSunk = false;

    constructor(shipLength) {
        this.length = shipLength;
    }

    hit() {
        if (this.shipSunk == true) return;

        this.hits++;

        if (this.isSunk()) {
            this.shipSunk = true;
        }
    }

    isSunk() {
        if(this.hits >= this.length) return true;

        return false;
    }
}