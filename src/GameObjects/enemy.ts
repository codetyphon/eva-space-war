import { GameObject } from '@eva/eva.js';
import { Physics, PhysicsType } from '@eva/plugin-matterjs';
import { Img } from '@eva/plugin-renderer-img';
import Enemy from '../Components/Enemy';
import { GAME_SIZE } from '../CONST';

const enemys = [
    {
        name: "enemy_1",
        size: {
            width: 248, height: 212
        },
        force_y: 0.4

    },
    {
        name: "enemy_2",
        size: {
            width: 240, height: 308
        },
        force_y: 0.2
    },
    {
        name: "enemy_3",
        size: {
            width: 346, height: 264
        },
        force_y: 0.1
    },
]



const EnamySprite = () => {
    const ememyRandom = enemys[Math.round(Math.random() * 2)]
    const enemy = new GameObject("enemy", {
        size: ememyRandom.size,
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: Math.floor(Math.random() * (GAME_SIZE.WIDTH)),
            y: 120
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

    enemy.addComponent(
        new Img({
            resource: ememyRandom.name
        })
    );

    const physics: Physics = enemy.addComponent(new Physics({
        type: PhysicsType.RECTANGLE,
        bodyOptions: {
            isStatic: false, // Whether the object is still, any force acting on the object in a static state will not produce any effect
            restitution: 0.3,
            frictionAir: 0,
            friction: 0,
            frictionStatic: 0,
            force: {
                x: 0,
                y: ememyRandom.force_y
            },
            stopRotation: true, // default false, usually do not need to be set
        },
    }))

    enemy.addComponent(new Enemy());

    return enemy;
}
export default EnamySprite