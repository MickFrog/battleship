import { DOM_Elements, drawPositions } from "./domUtil";

export default function initializePlayingBoards() {
    drawPositions(DOM_Elements.humanBoard);
    drawPositions(DOM_Elements.compBoard, true);
}