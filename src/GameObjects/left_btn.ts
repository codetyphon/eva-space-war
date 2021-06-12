import { GameObject } from '@eva/eva.js';
import { Physics } from '@eva/plugin-matterjs';
import { Img } from '@eva/plugin-renderer-img';
import {
    Event,
} from '@eva/plugin-renderer-event';
import { Scene } from '@eva/eva.js';
const LeftBtn = () => {
    const btn = new GameObject("leftBtn", {
        size: { width: 150, height: 150 },
        origin: { x: 0.5, y: 0.5 },
        scale: { x: 0.5, y: 0.5 },
        position: {
            x: 50,
            y: window.innerHeight - 50
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
            player.getComponent(Physics).body.force.x = -0.05
        } catch (error) {

        }
    })
    return btn;
}
export default LeftBtn