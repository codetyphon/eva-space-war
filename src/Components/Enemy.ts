import { GameObject, Scene, Transform } from "@eva/eva.js";
import { Component } from "@eva/eva.js";
import { Text } from '@eva/plugin-renderer-text'
import { GAME_SIZE } from '../CONST';

export default class Enemy extends Component {
    gameObject: GameObject;
    static componentName = "enemy";
    constructor() {
        super();
    }
    update() {
        const y = this.gameObject.getComponent(Transform).position.y
        if (y >= GAME_SIZE.HEIGHT) {
            const scene: Scene = this.gameObject.scene
            const score = scene.gameObjects.find((item) => { return item.name == "score" })
            const text = score.getComponent(Text)
            const number:number = parseInt(text.text)
            text.text = (number + 1) + ""
            this.gameObject.destroy()
        }
    }
}