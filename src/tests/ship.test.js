import Ship from '../ship'

let Cruiser = new Ship('Cruiser', 3);

test('Ship takes a hit', () => {
    expect(Cruiser.hit())
    .toBe(1);
});

Cruiser.hit();
Cruiser.hit();

test('Ship is sunk', () => {
    expect(Cruiser.isSunk())
    .toBe(true);
});

test('Ship cannot take hit when sunk', () => {
    expect(Cruiser.hit())
    .toBe(0);
});