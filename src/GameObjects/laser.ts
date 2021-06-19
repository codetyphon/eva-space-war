import { Scene } from '@eva/eva.js';
import { GameObject } from '@eva/eva.js';
import { Physics, PhysicsType } from '@eva/plugin-matterjs';
import { Img } from '@eva/plugin-renderer-img';
import Enemy from '../Components/Enemy';
import { Text } from '@eva/plugin-renderer-text'

const Laser = (x: number, y: number, angle: number) => {
    const laser = new GameObject("laser", {
        size: {
            width: 32,
            height: 82
        },
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: x,
            y: y
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

    laser.addComponent(
        new Img({
            resource: 'laser'
        })
    );

    const physics: Physics = laser.addComponent(new Physics({
        type: PhysicsType.RECTANGLE,
        bodyOptions: {
            isStatic: false, // Whether the object is still, any force acting on the object in a static state will not produce any effect
            restitution: 0,
            frictionAir: 0,
            friction: 0,
            frictionStatic: 0,
            force: {
                x: 0.1 * angle,
                y: -0.1
            },
            angle: angle
        },
        stopRotation: false, // default false, usually do not need to be set
    }))

    let i = 0

    physics.on('collisionStart', (body, gameObject1, gameObject2) => {
        if (body) {
            if (body.name == "enemy") {
                i++
                body.destroy()
                //score +1 
                const scene: Scene = laser.scene
                const score = scene.gameObjects.find((item) => { return item.name == "score" })
                const text = score.getComponent(Text)
                const number: number = parseInt(text.text)
                text.text = (number + 1) + ""
                if (i == 2) {
                    laser.destroy()
                }
            }
        }
    });

    laser.addComponent(new Enemy());

    return laser;
}
export default Laser