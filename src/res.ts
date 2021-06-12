import { RESOURCE_TYPE } from "@eva/eva.js"

const Res = [
    {
        name: "background",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/background.png",
            },
        },
        preload: true,
    },
    {
        name: "gameOver",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/gameover.png",
            },
        },
        preload: true,
    },
    {
        name: "player",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/player.png",
            }
        },
        preload: true,
    },
    {
        name: "enemy_1",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/enemy_1.png",
            },
        },
        preload: true,
    },
    {
        name: "left",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/left.png",
            },
        },
        preload: true,
    },
    {
        name: "right",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/right.png",
            },
        },
        preload: true,
    },
]
export default Res