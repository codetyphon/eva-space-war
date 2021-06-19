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
        name: "enemy_2",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/enemy_2.png",
            },
        },
        preload: true,
    },
    {
        name: "enemy_3",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/enemy_3.png",
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
    {
        name: "attack",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/attack.png",
            },
        },
        preload: true,
    },
    {
        name: "laser",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/player_laser.png",
            },
        },
        preload: true,
    },
    {
        name: "bomb",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/bomb.png",
            },
        },
        preload: true,
    },
    {
        name: "bgSound",
        type: RESOURCE_TYPE.AUDIO,
        src: {
            audio: {
                type: "audio",
                url: "assets/bg.mp3",
            },
        },
        preload: true,
    },
    {
        name: "attackSound",
        type: RESOURCE_TYPE.AUDIO,
        src: {
            audio: {
                type: "audio",
                url: "assets/attack.mp3",
            },
        },
        preload: true,
    },
    {
        name: "gameoverSound",
        type: RESOURCE_TYPE.AUDIO,
        src: {
            audio: {
                type: "audio",
                url: "assets/gameover.wav",
            },
        },
        preload: true,
    },
]
export default Res