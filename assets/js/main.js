// MODULE IMPORTS
import Player,  {DIRECTIONS, PLAYER}  from "./Player.js";
import Modal  from "./Modal.js";
import Room from "./Room.js";
import { createJoystick, JOYSTICK_TOLERANCE } from "./Joystick.js";

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
let isMobile = false;
let tapped;
let activeVendor;

// HTML SELECTORS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const startButton = document.querySelector('[data-button="start"]');
const closeButton = document.querySelector('[data-close]');
const fullscreenButton = document.querySelector('[data-fullscreen]');

const gameMenu = document.querySelector('#menu')
const gameWrapper =  document.querySelector('.sponsors-game-wrapper');
const joystickWrapper = document.querySelector('.joystick-wrapper');
const modalOverlay = document.querySelector(".modal-overlay");
const speechContainer = document.querySelector('[data-speech="bubble"]');

const players = document.querySelectorAll('[data-gender]');

// CLASS INSTANCES
const player = new Player(ctx);
const modal = new Modal(modalOverlay);
export let room = new Room(ctx, 1, 1);

const joystick = createJoystick(joystickWrapper);

// EVENT LISTENERS
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

startButton.addEventListener('click', startGame);

closeButton.addEventListener('click', () => modal.hide());

fullscreenButton.addEventListener('click', () => {
  if(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
    closeFullscreen();
  else
    openFullscreen(gameWrapper);
  fullscreenButton.blur()
});

players.forEach(player => player.addEventListener('click', () => selectPlayer(player)));

canvas.addEventListener("touchstart", (e) => {
  if (!tapped)
     tapped = setTimeout(() => tapped = null, 300); //wait 300ms then run single click code
  else {
    clearTimeout(tapped); //stop single tap callback
    tapped = null
    if(activeVendor && !modal.isVisible())
      showModal();
  }
});

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

  // mobile movement
  let joystickPosition = {x: 0, y: 0};
  if(isMobile) joystickPosition = joystick.getPosition();

  // movement check
  let hasMoved = false;

  if (isDirectionPressed(DIRECTIONS.UP) || joystickPosition.y < -JOYSTICK_TOLERANCE) {
    player.move(0, -1, DIRECTIONS.UP);
    hasMoved = true;
  } else if (isDirectionPressed(DIRECTIONS.DOWN) || joystickPosition.y > JOYSTICK_TOLERANCE) {
    player.move(0, 1, DIRECTIONS.DOWN);
    hasMoved = true;
  }

  if (isDirectionPressed(DIRECTIONS.LEFT) || joystickPosition.x < -JOYSTICK_TOLERANCE) {
    player.move(-1, 0, DIRECTIONS.LEFT);
    hasMoved = true;
  } else if (isDirectionPressed(DIRECTIONS.RIGHT) || joystickPosition.x > JOYSTICK_TOLERANCE) {
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
  
  // vendor collision detection
  vendorAnimation();

  // player movement
  player.draw(CYCLE_LOOP[currentLoopIndex]);

  // draw logos on vendors
  room.vendors.forEach(vendor => vendor.drawLogo());

  // move player if user is controlling it
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
  
  // draw speech bubble if there is an active vendor
  if(activeVendor && activeVendor.speaks)
      activeVendor.drawSpeechBubble();

  window.requestAnimationFrame(animation);
}

function vendorAnimation(){
  activeVendor = null;

  room.vendors.forEach(vendor => {
    if(vendor.collides(player)){
      activeVendor = vendor; 
      ctx.textAlign = 'center';
      ctx.fillStyle = 'black';
      ctx.font = "25px manaspc";
      if(isMobile)
        ctx.fillText(
          "Double tap to see the company's details", 
          canvas.width/2, canvas.height/2 + 10
        );
      else 
        ctx.fillText(
          "Press space to check the company's details", 
          canvas.width/2, canvas.height/2 + 10
        );
    }
  });

  if(activeVendor){
    activeVendor.speak();
    if(keyPresses[" "]){
      keyPresses[" "] = false;
      if(!modal.isVisible())
        showModal();
      else
        modal.hide();
    }
  } 
  else if(modal.isVisible()) 
    modal.hide();
  else 
    speechContainer.classList.add('hidden');
}

//  HELPER FUNCTIONS
function showModal(){
  modal.load(activeVendor.company);
  modal.show();
  setTimeout(() => {
    modalOverlay.addEventListener('click', hideModal)
  }, 2000);
}

function hideModal(e){
  if(modal.isVisible() && e.target == modal.container){
    modalOverlay.removeEventListener('click', hideModal)
    modal.hide();
  }
}

function isDirectionPressed(direction) {
  return KEYS[direction].some(key => keyPresses[key]);
}

function openFullscreen(elem) {
  if (elem.requestFullscreen)
  elem.requestFullscreen();
  else if (elem.webkitRequestFullscreen) /* Safari */
  elem.webkitRequestFullscreen();
  else if (elem.msRequestFullscreen) /* IE11 */
  elem.msRequestFullscreen();
}

function closeFullscreen() {
  if (document.exitFullscreen)
  document.exitFullscreen();
  else if (document.webkitExitFullscreen) /* Safari */
  document.webkitExitFullscreen();
  else if (document.msExitFullscreen) /* IE11 */
  document.msExitFullscreen()
}


//  SETUP FUNCTION
function setup(){
  canvas.width = CANVAS.WIDTH;
  canvas.height = CANVAS.HEIGHT;
  PLAYER.SCALE = CANVAS.HEIGHT / 7 / PLAYER.HEIGHT;
  player.setGender('male');

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
    gameWrapper.classList.add('mobile');
  }
}

setup();
