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
        .toBe('Carrier has been hit');
    });

    test('Hit on Battleship', () => {
        expect(myGameB.receiveAttack('G2'))
        .toBe('Battleship has been hit');
    });

    test('Hit on Cruiser', () => {
        expect(myGameB.receiveAttack('I3'))
        .toBe('Cruiser has been hit');
    });

    test('Hit on Submarine', () => {
        expect(myGameB.receiveAttack('C5'))
        .toBe('Submarine has been hit');
    });

    test('Hit on Gunner', () => {
        expect(myGameB.receiveAttack('C9'))
        .toBe('Gunner has been hit');
    });

    test('Missed shot', () => {
        expect(myGameB.receiveAttack('C3'))
        .toBe('Miss');
    });

    test('Shot on invalid spot', () => {
        expect(myGameB.receiveAttack('C3'))
        .toBe('Invalid');
    });
});

describe('Sinking Ships', () => {    

    myGameB.receiveAttack('C1'); myGameB.receiveAttack('D1'); myGameB.receiveAttack('E1'); 
    test('Sunk Carrier', () => {
        expect(myGameB.receiveAttack('F1'))
        .toBe('Carrier has been sunk');
    });

    myGameB.receiveAttack('G3'); myGameB.receiveAttack('G4');
    test('Sunk Battleship', () => {
        expect(myGameB.receiveAttack('G5'))
        .toBe('Battleship has been sunk');
    });

    myGameB.receiveAttack('I4');
    test('Sunk Cruiser', () => {
        expect(myGameB.receiveAttack('I5'))
        .toBe('Cruiser has been sunk');
    });

    myGameB.receiveAttack('C6');
    test('Sunk Submarine', () => {
        expect(myGameB.receiveAttack('C7'))
        .toBe('Submarine has been sunk');
    });

    test('Sunk Gunner', () => {
        expect(myGameB.receiveAttack('D9'))
        .toBe('Gunner has been sunk');
    });
    
    test('Invalid shot at ship', () => {
        expect(myGameB.receiveAttack('C7'))
        .toBe('Invalid');
    });

    test('Gameboard has all ships sunk', () => {
        expect(myGameB.boardShips.length)
        .toBe(0);
    });
});