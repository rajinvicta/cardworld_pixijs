import EntityFactory from './Kernel/Entity/EntityFactory';


class Game {
  private _entityFactory: EntityFactory;
  constructor(entityFactory: EntityFactory) {
    this._entityFactory = entityFactory;
  }

  public startGame() {
    console.log("Game Started!");
  }
}

export default Game;