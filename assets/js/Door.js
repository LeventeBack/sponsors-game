import { PLAYER } from "./Player.js";

export const DOOR = {
  HEIGHT: PLAYER.HEIGHT * PLAYER.SCALE * 1.3,
  WIDTH: PLAYER.WIDTH * PLAYER.SCALE * 1.3,
  TOLERANCE: 20 
};

export default class Door {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  render() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  enters(x, y, width, height) {
    const offset = 5; // without offset the player is not going to the next room
    return (
      (
        (x < this.x + this.width + offset && x + width > this.x - offset) || 
        (x + width > this.x - offset && x < this.x + this.width + offset)
      ) 
      && y >= this.y - DOOR.TOLERANCE 
      && y + height <= this.y + this.height + DOOR.TOLERANCE  
    ) || (
      (
        (y < this.y + this.height + offset && y + height > this.y - offset) || 
        (y + height > this.y - offset && y < this.y + this.height + offset)
      )
      && x >= this.x - DOOR.TOLERANCE
      && x + width <= this.x + this.width + DOOR.TOLERANCE
    );
  }
}