import { GameObject, Transform } from "@eva/eva.js";
import { Component } from "@eva/eva.js";
import { GAME_SIZE } from '../CONST';
import GameOver from "../GameObjects/gameover";

export default class PlayerAction extends Component {
    gameObject: GameObject;
    static componentName = "playerAction";
    game: any
    constructor() {
        super();
    }
    setgame(game) {
        this.game = game
    }
    update() {
        const x = this.gameObject.getComponent(Transform).position.x
        const y = this.gameObject.getComponent(Transform).position.y
        // // console.log(x)
        // this.gameObject.transform.position.x-=10
        if (x < 0 || x > GAME_SIZE.WIDTH || y > GAME_SIZE.HEIGHT || y < 0) {
            this.gameObject.scene.addChild(GameOver()) 
            this.gameObject.scene.gameObjects.map(item => {
                if (item.name == "enemy") {
                    // game.scene.removeGameObject(item)
                    // item.getComponent(Physics).removeAllListeners()
                    item.removeComponent("Physics")
                    // item.removeComponent("enemy")
                }
            })
            this.gameObject.destroy()            
        }
    }
}