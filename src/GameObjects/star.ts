import { GameObject } from '@eva/eva.js';
import { Graphics } from '@eva/plugin-renderer-graphics';
import { Render } from '@eva/plugin-renderer-render';
import { Transition } from '@eva/plugin-transition';
import Star from '../Components/Star';
import { GAME_SIZE } from '../CONST';

export default function createStar(
  { speed, size, count, needAlphaAnim } = {
    speed: 1,
    size: 4,
    count: 40,
    needAlphaAnim: false,
  }
) {
  const stars = new GameObject('star');
  const star1 = new GameObject('star1', {
    size: {
      width: GAME_SIZE.WIDTH,
      height: GAME_SIZE.HEIGHT,
    },
  });
  const star2 = new GameObject('star2', {
    size: {
      width: GAME_SIZE.WIDTH,
      height: GAME_SIZE.HEIGHT,
    },
  });
  const { graphics: graphics1 } = star1.addComponent(new Graphics());
  const { graphics: graphics2 } = star2.addComponent(new Graphics());
  drawRandom(graphics1, size, count);
  drawRandom(graphics2, size, count);

  needAlphaAnim && makeAlphaAnim(stars, star1, star2);

  stars.addChild(star1);
  stars.addChild(star2);

  stars.addComponent(
    new Star({
      star1,
      star2,
      speed,
    })
  );

  return stars;
}

function drawRandom(graphics, size, count) {
  for (let i = 0; i < count; i++) {
    graphics.beginFill(0xffffff, 0.3);
    graphics.drawRect(
      Math.random() * GAME_SIZE.WIDTH,
      Math.random() * GAME_SIZE.HEIGHT,
      size,
      size
    );
    graphics.endFill();
  }
}
function makeAlphaAnim(stars, star1, star2) {
  const render1 = star1.addComponent(new Render());
  const render2 = star2.addComponent(new Render());

  const anim = stars.addComponent(
    new Transition({
      group: {
        idle: [
          {
            name: 'alpha',
            component: render1,
            values: [
              {
                time: 0,
                value: 1,
                tween: 'ease-in',
              },
              {
                time: 4000,
                value: 0.2,
                tween: 'ease-in',
              },
              {
                time: 8000,
                value: 1,
                // tween: 'ease-in',
              },
            ],
          },
          {
            name: 'alpha',
            component: render2,
            values: [
              {
                time: 0,
                value: 1,
                tween: 'ease-in',
              },
              {
                time: 4000,
                value: 0,
                tween: 'ease-in',
              },
              {
                time: 8000,
                value: 1,
                // tween: 'ease-in',
              },
            ],
          },
        ],
      },
    })
  );
  anim.play('idle', Infinity);
}
