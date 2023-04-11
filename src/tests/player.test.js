import Player from "../player";

//The players
let human = new Player('Human');
let comp = new Player();

comp.playerBoard.placeShip('Gunner', 2, ['C9', 'D9']);
human.playerBoard.placeShip('Carrier', 5, ['B1', 'C1', 'D1', 'E1', 'F1']);

describe('Players versing each other', () => {
    test('Human making shot at AI board', () => {
        expect(human.castShot(comp.playerBoard, 'D9'))
        .toBe('Gunner has been hit');
    });

    test('AI making shot at human board', () => {
        console.log(comp.castShot(human.playerBoard));
    });
});