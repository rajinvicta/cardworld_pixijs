import ControlContainer from "../Dep/ControlContainer";
import CardWorld from "./CardWorld";

let cc = new ControlContainer();
let cardWorld = <CardWorld>cc.getMain();

cardWorld.startGame();

console.log("Welcome to CardWorld!");