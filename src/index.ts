import {
  resource,
  Game,
  GameObject,
  LOAD_SCENE_MODE,
  Scene,
} from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { ImgSystem } from '@eva/plugin-renderer-img';
import { EventSystem } from '@eva/plugin-renderer-event';
import { TextSystem } from '@eva/plugin-renderer-text';
import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { TransitionSystem } from '@eva/plugin-transition';
import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { PhysicsSystem } from '@eva/plugin-matterjs';
import { TilingSpriteSystem } from '@eva/plugin-renderer-tiling-sprite';
import { Sound, SoundSystem } from '@eva/plugin-sound';
import Res from './res';
import BackGround from './GameObjects/background';
import Player from './GameObjects/player';
import Score from './GameObjects/score';
import EnamySprite from './GameObjects/enemy';
import LeftBtn from './GameObjects/left_btn';
import RightBtn from './GameObjects/right_btn';
import PlayerAction from './Components/PlayerAction';
import { GAME_SIZE } from './CONST';
import createStar from './GameObjects/star';

resource.addResource(Res);

const game = new Game({
  autoStart: false,
  frameRate: 70, // Compatible with Eva's own bug, the frame rate must be greater than 60
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: GAME_SIZE.WIDTH,
      height: GAME_SIZE.HEIGHT,

      // antialias: true,
    }),
    new ImgSystem(),
    new TransitionSystem(),
    new SpriteAnimationSystem(),
    new RenderSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
    new GraphicsSystem(),
    new EventSystem(),
    new SoundSystem(),
    new PhysicsSystem({
      resolution: window.devicePixelRatio / 2, // 保持RendererSystem的resolution一致
      isTest: false, // 是否开启调试模式
      element: document.getElementById('container'), // 调试模式下canvas节点的挂载点
      world: {
        gravity: {
          y: 0, // 重力
        },
      },
    }),
    new TilingSpriteSystem(),
  ],
});

// game.scene.transform.size.width = GAME_SIZE.WIDTH
// game.scene.transform.size.height = GAME_SIZE.HEIGHT

const scene = new Scene('game');

game.loadScene({
  scene,
  type: LOAD_SCENE_MODE.SINGLE,
} as any);

scene.addChild(BackGround());
scene.addChild(
  createStar({ speed: 0.4, size: 2, count: 40, needAlphaAnim: false })
);
scene.addChild(
  createStar({ speed: 1, size: 4, count: 30, needAlphaAnim: true })
);
scene.addChild(LeftBtn());
scene.addChild(RightBtn());
scene.addChild(Score());

const init = () => {
  const player = Player();
  const payerAction: PlayerAction = player.getComponent('playerAction');
  payerAction.setgame(game);
  scene.addChild(player);
};

const bgSoundObj = new GameObject('sound');
const bgSound = bgSoundObj.addComponent(
  new Sound({ resource: 'bgSound', loop: true, autoplay: true, volume: 1 })
);
bgSound.play();

// document.addEventListener("click", () => {

// });

init();
game.start();

let startTime = Date.now();
game.ticker.add(() => {
  if (Date.now() - startTime < 1500) return;
  startTime = Date.now();
  try {
    const player: GameObject = game.scene.gameObjects.find((item) => {
      return item.name == 'player';
    });
    if (player) {
      console.log(player);
      const playerAction: PlayerAction = player.getComponent('playerAction');
      if (playerAction) {
        game.scene.addChild(EnamySprite());
      } else {
        console.log('game over');
        player.destroy();
      }
    } else {
      console.log('no player');
      const enemy = game.scene.gameObjects.find((item) => {
        return item.name == 'enemy';
      });
      if (!enemy) {
        init();
      }
    }
  } catch (error) { }
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    game.pause();
  } else {
    game.resume();
  }
});
