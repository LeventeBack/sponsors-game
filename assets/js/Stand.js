import { PLAYER } from "./Player.js";

const CHARACTER_IMG_PATH = 'assets/img/vendors/';
const TABLES_IMG_PATH = 'assets/img/tables/';
const COMPANY_IMG_PATH = 'assets/img/companies/';

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

const TABLES = {
  1: 'table1.png',
  2: 'table2.png',
  3: 'table3.png',
  4: 'table4.png',
}

const CHARACTER_WIDTH = PLAYER.WIDTH * PLAYER.SCALE;
const CHARACTER_HEIGHT = PLAYER.HEIGHT * PLAYER.SCALE;

const STAND_WIDTH = PLAYER.WIDTH * PLAYER.SCALE * 2 / 3;
const STAND_HEIGHT = PLAYER.HEIGHT;;

export default class Stand {
  constructor(data, ctx) {
    this.company = data;
    this.ctx = ctx;

    this.data = data.vendor;
    this.x = this.data.x;
    this.y = this.data.y;

    this.width = CHARACTER_WIDTH + STAND_WIDTH + 10;
    this.height = CHARACTER_HEIGHT + 10;

    this.characterImg = new Image();
    this.characterImg.src = CHARACTER_IMG_PATH + CHARACTERS[this.data.character];
    this.characterImg.onerror = () => this.imgError(this.characterImg);

    this.tableImg = new Image();
    this.tableImg.src = TABLES_IMG_PATH + TABLES[this.data.table];
    this.tableImg.onerror = () => this.imgError(this.characterImg)

    this.logoImg = new Image();
    this.logoImg.src = this.company.tablet.logo;
    this.logoImg.onerror = () => this.imgError(this.logoImg);

    this.logoRatio = this.logoImg.height / this.logoImg.width;
  }

  draw(){
    //this.ctx.fillRect(this.x, this.y, this.width, this.height);
    
    // draw vendor
    this.ctx.drawImage(
      this.characterImg, this.x, this.y, 
      CHARACTER_WIDTH, CHARACTER_HEIGHT
      );
    
    
      // draw stand
    // this.ctx.fillStyle = '#fff';
    // this.ctx.fillRect(this.x + PLAYER.WIDTH, this.y + 10,PLAYER.WIDTH * PLAYER.SCALE, PLAYER.HEIGHT * PLAYER.SCALE);
    this.ctx.drawImage(
      this.tableImg, this.x + PLAYER.WIDTH, this.y + 10, 
      PLAYER.WIDTH * PLAYER.SCALE, PLAYER.HEIGHT * PLAYER.SCALE
    );


    // draw logo
    this.drawBubble(this.ctx, this.x + PLAYER.WIDTH * 0.6, this.y, STAND_WIDTH * 2, STAND_HEIGHT * 1.2, 10);

    this.ctx.drawImage(this.logoImg, this.x + PLAYER.WIDTH * 0.7, this.y - PLAYER.HEIGHT *.8, STAND_WIDTH * 1.8, STAND_WIDTH * 1.8 *  this.logoRatio);
  }

  drawBubble(ctx, x, y, w, h, radius)
{
  let t = y - h; 
  var r = x + w;
  var b = y + h;
  ctx.beginPath();
  ctx.strokeStyle="black";
  ctx.lineWidth="2";
  ctx.moveTo(x+radius, y);
  ctx.lineTo(x+radius/2, y+10);
  ctx.lineTo(x+radius * 2, y);
  ctx.lineTo(r-radius, y);
  ctx.quadraticCurveTo(r, y, r, y-radius);
  ctx.lineTo(r, y-h+radius);
  ctx.quadraticCurveTo(r, y - h, r - radius, y - h);
  ctx.lineTo(x+radius, t);
  ctx.quadraticCurveTo(x, t, x, t+radius);
  ctx.lineTo(x, y-radius);
  ctx.quadraticCurveTo(x, y, x+radius, y);
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.fill();
}

  collides(player){
    const tolerance = 35;
    return this.x <= player.x + player.width * player.scale - tolerance
        && this.x + this.width >= player.x + tolerance
        && this.y <= player.y + player.height * player.scale  + tolerance
        && this.y + this.height >= player.y + tolerance;
  }

  imgError(img) {
    console.error("Error loading table image with source: " + img.src)
  }

}