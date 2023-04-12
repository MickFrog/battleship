import {Player, AI_Player} from "../player";

//The players
let human = new Player();
let comp = new AI_Player();

human.playerBoard.placeShip('Carrier', 5, ['B1', 'C1', 'D1', 'E1', 'F1']);

describe('Players versing each other', () => {
    test('Human making shot at AI board', () => {
        console.log(human.castShot(comp.playerBoard, 'E4'))
    });

    test('AI making shot at human board', () => {
        console.log(comp.castShot(human.playerBoard));
    });
});