// MODULE IMPORTS
import Player,  {DIRECTIONS}  from "../js/Player.js";
import Tablet  from "../js/Tablet.js";
import { companies } from "./data.js";
import Stand from "./Stand.js";

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
const tablet = new Tablet;
export const vendors = [];

// EVENT LISTENERS
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

canvas.addEventListener('click', e => {
  // hide tablet conditions
  if(tablet.isVisible())
    if(e.target === canvas || e.target === tablet.container)
      tablet.hide();
})

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
  ctx.clearRect(0, 0, canvas.width, canvas.height);

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

  vendorAnimation();

  player.draw(CYCLE_LOOP[currentLoopIndex]);

  window.requestAnimationFrame(animation);
}

function vendorAnimation(){
  let activeVendor;

  vendors.forEach(vendor => {
    vendor.draw()
    if(vendor.collides(player)){
      activeVendor = vendor;
      ctx.textAlign = 'center';
      ctx.fillStyle = 'white';
      ctx.font = "26px Comic Sans MS";
      ctx.fillText("Press space to check the company's details", canvas.width/2, canvas.height/1.2);
    }
  });

  if(activeVendor){
    if(keyPresses[" "] && !tablet.isVisible()) {
      tablet.load(activeVendor.company);
      tablet.show();
    } 
    if(keyPresses["Escape"]) {
      tablet.hide();
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

  player.setGender('male')

  setupVendors();
}

function setupVendors(){
  companies.forEach(company => {
    vendors.push(new Stand(company, ctx));
  });
}
setup();
startGame();
