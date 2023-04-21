import Gameboard from "../gameboard";

let myGameB = new Gameboard();

myGameB.placeShip('Carrier', 5, ['B1', 'C1', 'D1', 'E1', 'F1']);
myGameB.placeShip('Battleship', 4, ['G2', 'G3', 'G4', 'G5']);
myGameB.placeShip('Cruiser', 3, ['I3', 'I4', 'I5']);
myGameB.placeShip('Submarine', 3, ['C5', 'C6', 'C7']);
myGameB.placeShip('Gunner', 2, ['C9', 'D9']);

describe('Hitting tests', () => {
    test('Hit on Carrier', () => {
        expect(myGameB.receiveAttack('B1'))
        .toBe(1);
    });

    test('Hit on Battleship', () => {
        expect(myGameB.receiveAttack('G2'))
        .toBe(1);
    });

    test('Hit on Cruiser', () => {
        expect(myGameB.receiveAttack('I3'))
        .toBe(1);
    });

    test('Hit on Submarine', () => {
        expect(myGameB.receiveAttack('C5'))
        .toBe(1);
    });

    test('Hit on Gunner', () => {
        expect(myGameB.receiveAttack('C9'))
        .toBe(1);
    });

    test('Missed shot', () => {
        expect(myGameB.receiveAttack('C3'))
        .toBe(0);
    });

    test('Shot on invalid spot', () => {
        expect(myGameB.receiveAttack('C3'))
        .toBe(-1);
    });
});

describe('Sinking Ships', () => {    

    myGameB.receiveAttack('C1'); myGameB.receiveAttack('D1'); myGameB.receiveAttack('E1'); myGameB.receiveAttack('C6');
    myGameB.receiveAttack('G3'); myGameB.receiveAttack('G4'); myGameB.receiveAttack('I4');

    test('Invalid shot at ship', () => {
        expect(myGameB.receiveAttack('C6'))
        .toBe(-1);
    });

    test('Gameboard has all ships sunk', () => {
        myGameB.receiveAttack('F1');
        myGameB.receiveAttack('G5');
        myGameB.receiveAttack('I5');
        myGameB.receiveAttack('C7');
        myGameB.receiveAttack('D9');
        expect(
            myGameB.boardShips.length
            )
        .toBe(0);
    });
});