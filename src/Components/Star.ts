import { Component, GameObject } from '@eva/eva.js';

export default class Star extends Component {
  star1: GameObject;
  star2: GameObject;
  speed: number = 0.1;
  current: 'star1' | 'star2';
  init({ star1, star2, speed }) {
    this.star1 = star1;
    this.star2 = star2;
    this.speed = speed;
    this.current = 'star2';
  }
  start() {
    this.star1.transform.position.y = 0;
    this.star2.transform.position.y = -this.star2.transform.size.height;
  }
  update() {
    if (this[this.current].transform.position.y >= 0) {
      this.current = this.current === 'star1' ? 'star2' : 'star1';
      this[this.current].transform.position.y =
        -this[this.current].transform.size.height;
    }
    this.star1.transform.position.y += this.speed;
    this.star2.transform.position.y += this.speed;
  }
}
