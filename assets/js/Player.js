import { CANVAS,  room } from './main.js'


export const PLAYER =  {
  WIDTH: 55,
  HEIGHT: 55,  
  SPEED: 3,
  SCALE: 1.5,
  WIDTH_TOLERANCE: 0.5,
  HEIGHT_TOLERANCE: 0.5,
} 

export const DIRECTIONS = {
  DOWN: 0,
  RIGHT: 1,
  UP: 2,
  LEFT: 3,
}; 

export default class Player {
  constructor(ctx){
    this.ctx = ctx;
    
    this.speed = PLAYER.SPEED;
    this.height = PLAYER.HEIGHT;
    this.width = PLAYER.WIDTH;
    this.scale = PLAYER.SCALE;

    this.scaledWidth = this.width * this.scale;
    this.scaledHeight = this.height * this.scale;

    this.direction = DIRECTIONS.DOWN;
    
    this.x = CANVAS.WIDTH / 2 - this.scaledWidth / 2;
    this.y = CANVAS.HEIGHT / 2 - this.scaledHeight / 2; 
    
    this.img = new Image();
    
    this.ready = false;
  }

  positionTo(x, y){
    this.x = x != null ? x : this.x;
    this.y = y != null ? y : this.y;
  }
  
  draw(frame){
      // this.ctx.fillStyle = '#fff';
      // this.ctx.fillRect(this.x, this.y, this.scaledWidth, this.scaledHeight);
      this.ctx.drawImage(this.img,
      frame * this.width, this.direction * this.height, this.width, this.height,
      this.x, this.y, this.scaledWidth, this.scaledHeight);
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

    const isWall = !(nextX >= 0 && nextX < CANVAS.WIDTH - this.scaledWidth 
      && nextY >= 0 && nextY < CANVAS.HEIGHT - this.scaledHeight);

    const isDoor = room.isDoor(nextX, nextY, this.scaledWidth, this.scaledHeight);

    const isVendor = this.collides(nextX, nextY);

    if(isDoor) return true
    if(isVendor) return false
    if(isWall) return false 
  
    return true
   }

   setGender(gender){
      this.ready = false;
      this.gender = gender;
      this.img.src = `/assets/img/players/${this.gender}.png`;
      this.img.onload = () => this.ready = true;
      this.img.onerror = () => console.error('The player image could not be loaded from the url: ' + this.img.src);
    }

    collides(nextX, nextY){
      const widthTolerance = this.scaledWidth * PLAYER.WIDTH_TOLERANCE;
      const heightTolerance = this.scaledHeight * PLAYER.HEIGHT_TOLERANCE;

      return room.vendors.some(vendor => (
        nextX + this.scaledWidth - widthTolerance > vendor.x && 
        nextX + widthTolerance < vendor.x + vendor.width &&
        nextY + this.scaledHeight - heightTolerance / 2 > vendor.y && 
        nextY + heightTolerance < vendor.y + vendor.height
      ));
    }
}