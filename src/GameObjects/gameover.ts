import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img';
import { Text } from '@eva/plugin-renderer-text'
import {
    Event,
} from '@eva/plugin-renderer-event';
import { Scene } from '@eva/eva.js';

const GameOver = () => {
    const gameOver = new GameObject("GameOver", {
        size: { width: window.innerWidth, height: window.innerWidth / 5 },
        origin: { x: 0.5, y: 0.5 },
        scale: { x: 0.8, y: 0.8 },
        position: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        },
        anchor: {
            x: 0,
            y: 0
        }
    });

    gameOver.addComponent(
        new Img({
            resource: 'gameOver'
        })
    );

    const evt = gameOver.addComponent(new Event())

    evt.on('touchstart', e => {

        console.log('restart', gameOver)

        const scene: Scene = gameOver.scene

        const score = scene.gameObjects.find((item) => { return item.name == "score" })
        const text = score.getComponent(Text)
        text.text = 0 + ""
        
        while (scene.gameObjects.find((item) => { return item.name == "enemy" })) {
            scene.gameObjects.find((item) => { return item.name == "enemy" }).destroy()
        }

        gameOver.destroy()
    })
    return gameOver;
}
export default GameOver