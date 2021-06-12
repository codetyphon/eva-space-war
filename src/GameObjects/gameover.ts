import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img';
import { Text } from '@eva/plugin-renderer-text'
import {
    Event,
} from '@eva/plugin-renderer-event';
import { Scene } from '@eva/eva.js';
import { GAME_SIZE } from '../CONST';
import { Sound } from '@eva/plugin-sound';

const GameOver = () => {
    const gameOver = new GameObject("GameOver", {
        size: { width: GAME_SIZE.WIDTH, height: GAME_SIZE.WIDTH / 2 },
        origin: { x: 0.5, y: 0.5 },
        scale: { x: 0.8, y: 0.8 },
        position: {
            x: GAME_SIZE.WIDTH / 2,
            y: GAME_SIZE.HEIGHT / 2
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

    const bgSoundObj = new GameObject('sound');
    const bgSound = bgSoundObj.addComponent(
        new Sound({ resource: 'gameoverSound', loop: false, autoplay: true, volume: 1 })
    );
    bgSound.play();

    const evt = gameOver.addComponent(new Event())

    evt.on('touchstart', e => {

        console.log('restart', gameOver)

        const scene: Scene = gameOver.scene

        // const score = scene.gameObjects.find((item) => { return item.name == "score" })
        // const text = score.getComponent(Text)
        // text.text = 0 + ""

        while (scene.gameObjects.find((item) => { return item.name == "enemy" })) {
            scene.gameObjects.find((item) => { return item.name == "enemy" }).destroy()
        }

        while (scene.gameObjects.find((item) => { return item.name == "score" })) {
            scene.gameObjects.find((item) => { return item.name == "score" }).destroy()
        }

        gameOver.destroy()
    })
    return gameOver;
}
export default GameOver