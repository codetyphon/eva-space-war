import { GameObject } from "@eva/eva.js";
import { TilingSprite } from "@eva/plugin-renderer-tiling-sprite";
import TilingSpriteMove from "../Components/TilingSpriteMove";
import { GAME_SIZE } from '../CONST';
const BackGround = () => {
    const backGround = new GameObject("background", {
        size: { width: GAME_SIZE.WIDTH, height: GAME_SIZE.HEIGHT },
    });

    backGround.addComponent(
        new TilingSprite({
            resource: "background",
            tileScale: { x: GAME_SIZE.WIDTH / 720, y: GAME_SIZE.HEIGHT / 1080 },
            tilePosition: { x: 0, y: 0 },
        })
    );

    // backGround.addComponent(new TilingSpriteMove());
    return backGround
}


export default BackGround