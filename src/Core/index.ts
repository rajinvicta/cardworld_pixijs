import ControlContainer from "../Dep/ControlContainer";
import Game from "./Game";

let cc = new ControlContainer();
let game = <Game>cc.getMain();

console.log("Welcome to CardWorld!");