import { GameObject } from "@eva/eva.js";
import { TilingSprite } from "@eva/plugin-renderer-tiling-sprite";
import TilingSpriteMove from "../Components/TilingSpriteMove";
const BackGround = () => {
    const backGround = new GameObject("background", {
        size: { width: window.innerWidth, height: window.innerHeight },
    });

    backGround.addComponent(
        new TilingSprite({
            resource: "background",
            tileScale: { x: window.innerWidth / 720, y: window.innerHeight / 1080 },
            tilePosition: { x: 0, y: 0 },
        })
    );

    backGround.addComponent(new TilingSpriteMove());
    return backGround
}


export default BackGround