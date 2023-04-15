import './style.css';
import { Player, AI_Player } from "./player";
import initializeBoards from './domBusiness/dom';

//Initialize players
let humanPlayer = new Player();

let compPlayer = new AI_Player();

initializeBoards();