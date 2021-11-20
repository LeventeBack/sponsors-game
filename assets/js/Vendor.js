import { PLAYER } from "./Player.js";

const CHARACTER_IMG_PATH = '/assets/img/vendors/';
const STANDS_IMG_PATH = '/assets/img/stands/';

const CHARACTERS = {
  teacher: 'teacher.png',
  businessWoman: 'business_woman.png',
  businessMan: 'businessman.png',
  it: "IT_guy.png",
  lab: "lab_worker.png",
  manager: "manager.png",
  professor: "professor.png",
  worker: 'public_worker.png',
}

const STANDS = {
  1: 'fair_stand1.png',
  2: 'fair_stand2.png',
  3: 'fair_stand3.png',
  4: 'fair_stand4.png',
}

const CHARACTER = {
  WIDTH: PLAYER.WIDTH * PLAYER.SCALE,
  HEIGHT: PLAYER.HEIGHT * PLAYER.SCALE,
} 

const STAND = {
  WIDTH: CHARACTER.WIDTH * 1.5,
  HEIGHT: CHARACTER.HEIGHT * 1.5
}

export const VENDOR = {
  WIDTH: CHARACTER.WIDTH / 2 + STAND.WIDTH,
  HEIGHT: STAND.HEIGHT,
  TOP_OFFSET: 50,
  BOTTOM_OFFSET: 40,
}

export default class Vendor {
  constructor(ctx, company) {
    this.company = company.data;
    this.data = company.vendor;
    
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;

    this.width = VENDOR.WIDTH;
    this.height = VENDOR.HEIGHT;

    this.loadImages();
  }
  
  loadImages(){
    this.characterImg = new Image();
    this.characterImg.src = CHARACTER_IMG_PATH + CHARACTERS[this.data.character];
    this.characterImg.onerror = () => this.imgError(this.characterImg);

    this.standImg = new Image();
    this.standImg.src = STANDS_IMG_PATH + STANDS[this.data.stand];
    this.standImg.onerror = () => this.imgError(this.standImg)

    // this.logoImg = new Image();
    // this.logoImg.src = this.company.tablet.logo;
    // this.logoImg.onerror = () => this.imgError(this.logoImg);
  }

  draw(){
    // this.ctx.fillStyle = 'red';
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    
    // draw vendor
    this.ctx.drawImage(
      this.characterImg, this.x - CHARACTER.WIDTH / 4, this.y + this.height - CHARACTER.HEIGHT,
      CHARACTER.WIDTH, CHARACTER.HEIGHT
    );
    
    // draw stand
    this.ctx.drawImage(
      this.standImg, this.x + CHARACTER.WIDTH / 2, this.y, STAND.WIDTH, STAND.HEIGHT
    );
  }

//   drawBubble(ctx, x, y, w, h, radius)
// {
//   let t = y - h; 
//   var r = x + w;
//   var b = y + h;
//   ctx.beginPath();
//   ctx.strokeStyle="black";
//   ctx.lineWidth="2";
//   ctx.moveTo(x+radius, y);
//   ctx.lineTo(x+radius/2, y+10);
//   ctx.lineTo(x+radius * 2, y);
//   ctx.lineTo(r-radius, y);
//   ctx.quadraticCurveTo(r, y, r, y-radius);
//   ctx.lineTo(r, y-h+radius);
//   ctx.quadraticCurveTo(r, y - h, r - radius, y - h);
//   ctx.lineTo(x+radius, t);
//   ctx.quadraticCurveTo(x, t, x, t+radius);
//   ctx.lineTo(x, y-radius);
//   ctx.quadraticCurveTo(x, y, x+radius, y);
//   ctx.stroke();
//   ctx.fillStyle = '#fff';
//   ctx.fill();
// }

  setPosition(x, y){
    this.x = x;
    this.y = y;
  }

  collides(player){
    const offset = 25;
    return this.x <= player.x + player.scaledWidth
        && this.x + this.width >= player.x
        && this.y <= player.y + player.scaledHeight
        && this.y + this.height >= player.y - offset;
  }

  imgError(img) {
    console.error("Error loading image with source: " + img.src)
  }

}