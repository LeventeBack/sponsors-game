import { CANVAS, vendors } from '../js/main.js'

export const PLAYER =  {
  WIDTH: 55,
  HEIGHT: 55,  
  SPEED: 2.5,
  SCALE: 1.5,
  WIDTH_TOLERANCE: 0.6,
  HEIGHT_TOLERANCE: 0.6,
} 

export const DIRECTIONS = {
  DOWN: 0,
  RIGHT: 1,
  UP: 2,
  LEFT: 3,
}; 

export default class Player {
  constructor(ctx){
    this.img = new Image();
    this.speed = PLAYER.SPEED;
    this.height = PLAYER.HEIGHT;
    this.scale = PLAYER.SCALE;
    this.width = PLAYER.WIDTH;
    this.direction = DIRECTIONS.DOWN;
    this.ctx = ctx;
    
    this.x = CANVAS.WIDTH / 2 - PLAYER.WIDTH / 2;
    this.y = CANVAS.HEIGHT / 2 - PLAYER.HEIGHT / 2; 
    
    this.ready = false;
  }
  
  draw(frame){
    // this.ctx.fillRect(this.x, this.y, this.width * this.scale, this.height * this.scale);
    this.ctx.drawImage(this.img,
      frame * this.width, this.direction * this.height, this.width, this.height,
      this.x, this.y, this.width * this.scale, this.height * this.scale);
  }

  move(deltaX, deltaY, direction){
    if(!this.canMove(deltaX, deltaY)) return;

    this.x += (deltaX * this.speed);
    this.y += (deltaY * this.speed);
    this.direction = direction;
  } 

  canMove(deltaX, deltaY){
    const nextX = this.x + (deltaX * this.speed);
    const nextY = this.y + (deltaY * this.speed);

    return nextX >= 0 && nextX < CANVAS.WIDTH - this.width * this.scale 
        && nextY >= 0 && nextY < CANVAS.HEIGHT - this.height * this.scale
        && !this.collides(nextX, nextY);
   }

   setGender(gender){
      this.ready = false;
      this.gender = gender;
      this.img.src = `/assets/img/players/${this.gender}.png`;
      this.img.onload = () => this.ready = true;
      this.img.onerror = () => console.error('The player image could not be loaded from the url: ' + this.img.src);
    }

    collides(nextX, nextY){
      const widthTolerance = this.width * this.scale * PLAYER.WIDTH_TOLERANCE;
      const heightTolerance = this.height * this.scale * PLAYER.HEIGHT_TOLERANCE;

      return vendors.some(vendor => {
        return vendor.x < nextX + this.width * this.scale - widthTolerance
            && vendor.x + vendor.width > nextX + widthTolerance
            && vendor.y < nextY + this.height * this.scale  + heightTolerance
            && vendor.y + vendor.height > nextY + heightTolerance;
      })
    }
}