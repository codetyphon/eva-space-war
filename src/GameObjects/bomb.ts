import { Scene } from '@eva/eva.js';
import { GameObject } from '@eva/eva.js';
import { Physics, PhysicsType } from '@eva/plugin-matterjs';
import { Img } from '@eva/plugin-renderer-img';
import { GAME_SIZE } from '../CONST';
import { Text } from '@eva/plugin-renderer-text'


const BombSprite = () => {
    const bomb = new GameObject("bomb", {
        size: {
            width: 128,
            height: 128
        },
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: Math.floor(Math.random() * (GAME_SIZE.WIDTH)),
            y: -120
        },
        scale: {
            x: 0.5,
            y: 0.5
        },
        anchor: {
            x: 0,
            y: 0
        }
    });

    bomb.addComponent(
        new Img({
            resource: "bomb"
        })
    );

    const physics: Physics = bomb.addComponent(new Physics({
        type: PhysicsType.RECTANGLE,
        bodyOptions: {
            isStatic: false, // Whether the object is still, any force acting on the object in a static state will not produce any effect
            restitution: 0.5,
            frictionAir: 0,
            friction: 0,
            frictionStatic: 0,
            force: {
                x: 0,
                y: 0.1
            },
        },
        stopRotation: false, // default false, usually do not need to be set
    }))

    physics.on('collisionStart', (body, gameObject1, gameObject2) => {
        if (body.name == "player" || body.name == "laser") {
            while (bomb.scene.gameObjects.find((item) => { return item.name == "enemy" })) {
                bomb.scene.gameObjects.find((item) => { return item.name == "enemy" }).destroy()
                //score +1 
                const scene: Scene = bomb.scene
                const score = scene.gameObjects.find((item) => { return item.name == "score" })
                const text = score.getComponent(Text)
                const number: number = parseInt(text.text)
                text.text = (number + 1) + ""
            }
            bomb.destroy()
        }
    });

    // bomb.addComponent(new Enemy());

    return bomb;
}
export default BombSprite