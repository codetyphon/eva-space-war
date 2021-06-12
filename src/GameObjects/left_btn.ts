import { GameObject } from '@eva/eva.js';
import { Physics } from '@eva/plugin-matterjs';
import { Img } from '@eva/plugin-renderer-img';
import {
    Event,
} from '@eva/plugin-renderer-event';
import { Scene } from '@eva/eva.js';
import { GAME_SIZE } from '../CONST';
const LeftBtn = () => {
    const btn = new GameObject("leftBtn", {
        size: { width: 300, height: 300 },
        origin: { x: 0.5, y: 0.5 },
        scale: { x: 0.5, y: 0.5 },
        position: {
            x: 100,
            y: GAME_SIZE.HEIGHT - 100
        },
        anchor: {
            x: 0,
            y: 0
        }
    });

    btn.addComponent(
        new Img({
            resource: 'left'
        })
    );

    const evt = btn.addComponent(new Event())

    evt.on('tap', e => {
        console.log('left')

        try {
            const scene: Scene = btn.scene
            const player: GameObject = scene.gameObjects.find((item) => { return item.name == "player" })
            player.getComponent(Physics).body.force.x = -0.5
        } catch (error) {

        }
    })
    return btn;
}
export default LeftBtn