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
    score_add() {
        const scene: Scene = this.gameObject.scene
        const score = scene.gameObjects.find((item) => { return item.name == "score" })
        if (score) {
            const text = score.getComponent(Text)
            const number: number = parseInt(text.text)
            text.text = (number + 1) + ""
        }
    }
    update() {
        const { x, y } = this.gameObject.getComponent(Transform).position
        if (y >= GAME_SIZE.HEIGHT) {
            this.score_add()
            this.gameObject.destroy()
        }
    }
}