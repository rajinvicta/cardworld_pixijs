import EntityFactory from "../../Kernel/GameObjects/EntityFactory";

import Sprite from "../../Kernel/GameObjects/Sprite";
import Button from "../GameItems/Button";

import IScene from "../../Kernel/GameObjects/IScene";
import ISceneManager from "../../Plugin/ISceneManager";
import Background from "../GameItems/Background";
import {Positions} from "../../Kernel/Data/ScaleMode";
import ParticleSystem from "../../Kernel/Control/ParticleSystem";


class FireMode implements IScene {
  private _entityFactory: EntityFactory;
  private _sceneManager: ISceneManager;
  private _back: Button;
  private _background: Background;
  private _particleSystem: ParticleSystem;

  constructor(entityFactory: EntityFactory, sceneManager: ISceneManager, button: Button, background: Background,
  particleSystem: ParticleSystem) {
    this._entityFactory = entityFactory;
    this._sceneManager = sceneManager;
    this._particleSystem = particleSystem;

    this._back = button;

    this._background = background;
  }

  public async preload(): Promise<void> {

  }

  public create() {
    console.log("FireMode Level");
    this._initBackground();
    this._initButtons();
    this._addFire();
  }

  public update(dt: number) {
    //console.log("dt: ", dt);

    this._particleSystem.update(dt);
  }

  public shutdown() {

  }

  private _addFire() {
    let config = {
      x: 540,
      y: 1200,
      maxParticle: 10,
      sheet: 'main',
      frame: 'Pink',
      scale: {start: {x: 0.65, y: 0.65}, end: {x: 1.25, y: 1.25}, varianceX: {min: -1.5, max: 1.5}, varianceY: {min: -1.5, max: 1.5}},
      tint: {start: 0, end: 0},
      motion: {velocity: {x: 2, y: -3}, varianceX: {min: -1.5, max: 1.5}, varianceY: {min: 1, max: 1.5}},
      life: 3000,
      emitTime: 1000,
      emitBurst: 3,
      varianceMultiple: {min: -1.25, max: 1.25}
    };

    this._particleSystem.init(config);
  }

  private _initBackground() {
    this._background.init('main');
  }

  private  _initButtons() {
    this._back.init(-100, 150, 'back_btn', () => {
      this._sceneManager.startScene('Menu');
    });
    this._back.sprite.position.anchorX = 1;
    this._back.sprite.position.anchorY = 0.5;
    this._back.sprite.position.fitInsideContainer(false);
    this._back.sprite.position.setScaleMode(Positions.right, Positions.left, 1);
  }

}

export default FireMode;