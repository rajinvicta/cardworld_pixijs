import EntityFactory from "../../Kernel/GameObjects/EntityFactory";
import CoreEntity from "../../Kernel/GameObjects/CoreEntity";
import { TweenObject } from "../../Plugin/ITweenJs";
import Sprite from "../../Kernel/GameObjects/Sprite";
import Text from "../../Kernel/GameObjects/Text";

class TextImage {
  private _entityFactory: EntityFactory;
  private _entityList: any[];
  private _imageList: string[];
  private _textList: string[];

  constructor(entityFactory: EntityFactory) {
    this._entityList = [];
    this._imageList = [];
    this._textList = [];

    this._entityFactory = entityFactory;
  }

  public showRandom() {
    this._clearOld();

    for (let c = 0; c < 3; c++) {
      let entity = this._createEntity(c, this._rnd(1, 2));
      this._entityList.push(entity);
    }
  }

  private _clearOld() {
    for (let c = 0; c < this._entityList.length; c++) {
      let entity = this._entityList[c];
      entity.display.destroy();
    }
  }

  private _createEntity(position: number, form: number) {
    if (form == 1) {
      let sprNum = this._rnd(0, this._imageList.length - 1);
      let sprName = this._imageList[sprNum];

      let entity = this._entityFactory.sprite(300 + (position * 245), 450, 'main', sprName);
      entity.position.anchorX = 0.5;
      entity.position.anchorY = 0.5;
      return entity;
    } else {
      let txtNum = this._rnd(0, this._textList.length -1);
      let txt = this._textList[txtNum];
      let fnSize = this._rnd(25, 65);

      let entity = this._entityFactory.text(300 + (position * 245), 450, txt, {fill: 'white', fontSize: fnSize});
      entity.position.anchorX = 0.5;
      entity.position.anchorY = 0.5;
      return entity;
    }
  }

  public addImages(imgList: string[]) {
    for (let c = 0; c < imgList.length; c++) {
      this._imageList.push(imgList[c]);
    }
  }

  public addTexts(txtList: string[]) {
    for (let c = 0; c < txtList.length; c++) {
      this._textList.push(txtList[c]);
    }
  }

  private _rnd(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default TextImage;