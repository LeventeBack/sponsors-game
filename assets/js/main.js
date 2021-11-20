// MODULE IMPORTS
import Player,  {DIRECTIONS, PLAYER}  from "./Player.js";
import Modal  from "./Modal.js";
import { companies } from "./data.js";
import Room from "./Room.js";

// GLOBAL CONSTANTS
export const CANVAS = {
  WIDTH: 1000,
  HEIGHT: 550
};

const KEYS = {
  [DIRECTIONS.UP]: ['W', 'w', 'ArrowUp'],
  [DIRECTIONS.DOWN]: ['S', 's', 'ArrowDown'],
  [DIRECTIONS.LEFT]: ['A', 'a', 'ArrowLeft'],
  [DIRECTIONS.RIGHT]: ['D', 'd', 'ArrowRight']
}

const FRAME_DELAY = 12; 
const CYCLE_LOOP = [0, 1, 0, 2];

// GLOBAL VARIABLES
let keyPresses = {};
let frameCount = 0; 
let currentLoopIndex = 0;

// HTML SELECTORS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const players = document.querySelectorAll('[data-gender]');
const startButton = document.querySelector('[data-button="start"]');
const gameMenu = document.querySelector('#menu')


// CLASS INSTANCES
const player = new Player(ctx);
const modal = new Modal;
export let room = new Room(ctx, 1, 1); 

// EVENT LISTENERS
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

players.forEach(player => player.addEventListener('click', () => selectPlayer(player)));

startButton.addEventListener('click', startGame)

// EVENT HANDLER FUNCTIONS 
function keyDownHandler(event) {
    keyPresses[event.key] = true;
}

function keyUpHandler(event) {
    keyPresses[event.key] = false;
}

function selectPlayer(playerElement){
  players.forEach(p => p.classList.remove('selected'))
  playerElement.classList.add('selected');  
  const gender = playerElement.dataset.gender;
  player.setGender(gender);
}

function startGame(){
  gameMenu.classList.add('hidden');
  if(player.ready) 
    requestAnimationFrame(animation);
  else 
    player.img.onload = () => {
      requestAnimationFrame(animation);
    }
}

// ANIMATION RELATED FUNCTIONS
function animation(){
  const clearOffset = 100
  ctx.clearRect(-clearOffset, -clearOffset, canvas.width + clearOffset, canvas.height + clearOffset);

  // movement check
  let hasMoved = false;

  if (isDirectionPressed(DIRECTIONS.UP)) {
    player.move(0, -1, DIRECTIONS.UP);
    hasMoved = true;
  } else if (isDirectionPressed(DIRECTIONS.DOWN)) {
    player.move(0, 1, DIRECTIONS.DOWN);
    hasMoved = true;
  }

  if (isDirectionPressed(DIRECTIONS.LEFT)) {
    player.move(-1, 0, DIRECTIONS.LEFT);
    hasMoved = true;
  } else if (isDirectionPressed(DIRECTIONS.RIGHT)) {
    player.move(1, 0, DIRECTIONS.RIGHT);
    hasMoved = true;
  }

  if (hasMoved) 
    if(++frameCount >= FRAME_DELAY) {
      frameCount = 0;
      currentLoopIndex = (currentLoopIndex + 1) % CYCLE_LOOP.length;
    }
  
  if(!hasMoved)
    currentLoopIndex = 0;

  // drawing section
  room.draw();
  
  vendorAnimation();

  // player movement
  player.draw(CYCLE_LOOP[currentLoopIndex]);

  if(player.x >= canvas.width) {
    room = new Room(ctx,  room.row, room.col + 1);
    player.x -= CANVAS.WIDTH;
  }
  else if(player.x + player.scaledWidth <= 0) {
    room = new Room(ctx,  room.row, room.col - 1);
    player.x += CANVAS.WIDTH;
  }
  else if(player.y >= canvas.height ){
    room = new Room(ctx,  room.row + 1, room.col);
    player.y -= CANVAS.HEIGHT;
  }
  else if(player.y + player.scaledHeight <= 0) {
    room = new Room(ctx,  room.row - 1, room.col);
    player.y += CANVAS.HEIGHT;
  } 

  window.requestAnimationFrame(animation);
}

function vendorAnimation(){
  let activeVendor;

  room.vendors.forEach(vendor => {
    if(vendor.collides(player)){
      activeVendor = vendor;
      ctx.textAlign = 'center';
      ctx.fillStyle = 'black';
      ctx.font = "28px Comic Sans MS";
      ctx.fillText("Press space to check the company's details", canvas.width/2, canvas.height/2 + 10);
    }
  });

  if(activeVendor){
    if(keyPresses[" "] && !modal.isVisible()) {

      modal.load(activeVendor.company);
      modal.show();
    } 
    if(keyPresses["Escape"]) {
      modal.hide();
    }
  }
}

function isDirectionPressed(direction) {
  return KEYS[direction].some(key => keyPresses[key]);
}


//  SETUP FUNCTIONS
function setup(){
  canvas.width = CANVAS.WIDTH;
  canvas.height = CANVAS.HEIGHT;

  player.setGender('male');
}


setup();
