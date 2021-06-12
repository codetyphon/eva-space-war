import { GameObject } from "@eva/eva.js";
import { Physics, PhysicsType } from "@eva/plugin-matterjs";
import { Img } from "@eva/plugin-renderer-img";
import PlayerAction from "../Components/PlayerAction";
import { GAME_SIZE } from '../CONST';
const Player = () => {
    const player = new GameObject("player", {
        size: { width: 206, height: 214 },
        origin: { x: 0.5, y: 0.5 },
        position: {
            x: GAME_SIZE.WIDTH / 2,
            y: GAME_SIZE.HEIGHT - 214 - 60,
        },
        scale: {
            x: 0.5,
            y: 0.5
        },
        anchor: {
            x: 0,
            y: 0,
        },
    });

    player.addComponent(
        new Img({
            resource: 'player'
        })
    );

    player.addComponent(new PlayerAction())

    const playerPhysics = player.addComponent(new Physics({
        type: PhysicsType.RECTANGLE,
        bodyOptions: {
            isStatic: false,
            restitution: 1,
            frictionAir: 0.1,
            friction: 1,
            frictionStatic: 1,
            force: {
                x: 0,
                y: -0.1,
            },
            stopRotation: true,
        },
    }))

    return player
}

export default Player