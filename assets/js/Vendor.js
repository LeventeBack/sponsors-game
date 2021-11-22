import { PLAYER } from "./Player.js";
import { CANVAS } from "./main.js";

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
  TOP_OFFSET: 60,
  BOTTOM_OFFSET: 50,
}

const speechBubbleImg = new Image();
speechBubbleImg.src = '/assets/img/speech-bubble.png';

const speechContainer = document.querySelector('[data-speech="bubble"]');
const speechText = document.querySelector('[data-speech="text"]');

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

    this.logoImg = new Image();
    this.logoImg.src = this.company.logo;
    this.logoImg.onerror = () => this.imgError(this.logoImg);
  }

  draw(){    
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
  
  drawLogo(){
    const {width, height} = this.getCorrectImgSizes(this.logoImg, STAND.WIDTH * 6 / 5, STAND.HEIGHT * 3/5);

    const topOffset =  (STAND.HEIGHT * 3 / 5 - height) / 2;
    const sideOffset = (STAND.WIDTH * 6 / 5 - width) / 3;
    
    // white background for logo
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x + CHARACTER.WIDTH / 3 + sideOffset, this.y - STAND.HEIGHT / 5 + topOffset, width, height);

    // draw logo
    this.ctx.drawImage(this.logoImg,
      this.x + CHARACTER.WIDTH / 3 + sideOffset, this.y - STAND.HEIGHT / 5 + topOffset, width, height
    );
  }

  // drawSpeechBubble(){
  //   if(!this.data.speech) return;

  //   this.ctx.drawImage(
  //     speechBubbleImg, this.x + this.width / 4, this.y - this.height / 2,
  //     VENDOR.WIDTH, VENDOR.HEIGHT
  //   );
  //   this.ctx.textAlign = 'center';
  //   this.ctx.textBaseline = 'middle'
  //   this.ctx.fillStyle = 'black';
  //   this.ctx.font = "14px manaspc";
  //   // this.ctx.fillRect(this.x + this.width / 3, this.y - this.height / 3 - 5, this.width * 6 / 7, this.height * 5 / 7);
  //   const width = this.width * 6 / 7;
  //   const height = this.height * 5 / 7;
  //   //this.ctx.fillText(this.data.speech, this.x + this.width / 3 + width / 2, this.y - this.height / 3 + height / 2, width);


  //   function wrapText(context, text, x, y, maxWidth, lineHeight) {
  //     var words = text.split(' ');
  //     var line = '';
  
  //     for(var n = 0; n < words.length; n++) {
  //       var testLine = line + words[n] + ' ';
  //       var metrics = context.measureText(testLine);
  //       var testWidth = metrics.width;
  //       if (testWidth > maxWidth && n > 0) {
  //         context.fillText(line, x, y);
  //         line = words[n] + ' ';
  //         y += lineHeight;
  //       }
  //       else {
  //         line = testLine;
  //       }
  //     }
  //     context.fillText(line, x, y);
  //   }
  
  //   wrapText(this.ctx, this.data.speech, this.x + this.width / 3 + width / 2, this.y - this.height / 4, width , 12);

  // }

  speak(){
    speechText.innerHTML = this.data.speech;
    speechContainer.classList.remove('hidden');
    speechContainer.style.setProperty('--x', (this.x + this.width / 4) * 100 / CANVAS.WIDTH);
    speechContainer.style.setProperty('--y', this.y  * 100 / CANVAS.HEIGHT);
  }

  getCorrectImgSizes(img, boxWidth, boxHeight) {
    const aspectRatio = img.width / img.height;

    if(aspectRatio > 1)
      return {
        width: boxWidth,
        height: boxWidth / aspectRatio
      }

    return {
      width: boxHeight * aspectRatio,
      height: boxHeight
    }
  }

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
 
  
  