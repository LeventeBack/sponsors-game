import { CANVAS } from "./main.js";
import Vendor, { VENDOR } from "./Vendor.js";
import Door, { DOOR } from "./Door.js";
import { companies } from "./data.js";
import { DIRECTIONS } from "./Player.js";

const WALL = {
  TOP: 4,
  SIDE: 2.5,
  BOTTOM: 2,
  SIZE: 10,
  COLOR: "#565656",
};

const ARROW = {
  SIZE: 110,
  SCALED_SIZE: 60,
  OFFSET_MAIN: 50,
  OFFSET_SIDE: 60,
}

// const WINDOW = {
//   NUMBER: 4,
//   SIZE: 30,
// };


// MAP STRUCTURE 
// 1 2 3 
// 4 5 6
// 7 8 9

const MAP = [
  [
    { id: 1, doors: [2], stands: {top: 4, bottom: 4} },
    { id: 2, doors: [1, 5], stands: {top: 4, bottom: 2} },
    { id: 3, doors: [6], stands: {top: 4, bottom: 2} },
  ],
  [
    { id: 4, doors: [5, 7], stands: {top: 4, bottom: 2} },
    { id: 5, doors: [2, 4, 6, 8], stands: {top: 4, bottom: 4} },
    { id: 6, doors: [3, 5], stands: {top: 2, bottom: 4} },
  ],
  [
    { id: 7, doors: [4], stands: {top: 2, bottom: 4} },
    { id: 8, doors: [5, 9], stands: {top: 2, bottom: 4} },
    { id: 9, doors: [8], stands: {top: 4, bottom: 4} },
  ],
];

export default class Room {
  constructor(ctx, row, col) {
    this.ctx = ctx;

    this.id = MAP[row][col].id; 
    this.positions = MAP[row][col].stands;  
  
    this.doors = [];
    this.arrows = [];
    this.vendors = companies
                    .filter(company => company.vendor.roomId === this.id)
                    .sort((a, b) => a.vendor.position > b.vendor.position)
                    .map(company => new Vendor(this.ctx, company));

    this.row = row;
    this.col = col;

    this.arrowImg = new Image();
    this.arrowImg.src = "assets/img/arrows.png";

    this.handleDirections();
    this.setVendorPositions();
  }

  draw() {    
    this.drawWalls();
    this.drawArrows();
    this.doors.forEach(door => door.render());
    this.vendors.forEach(vendor => vendor.draw());
  }

  drawWalls(){    
    this.ctx.fillStyle = WALL.COLOR;
    // top wall
    this.ctx.fillRect(0, 0, CANVAS.WIDTH, WALL.TOP * WALL.SIZE);
    // left wall
    this.ctx.fillRect(0, 0, WALL.SIZE * WALL.SIDE, CANVAS.HEIGHT);
    // right wall
    this.ctx.fillRect(CANVAS.WIDTH - WALL.SIZE * WALL.SIDE, 0, WALL.SIZE * WALL.SIDE, CANVAS.HEIGHT);
    // bottom wall
    this.ctx.fillRect(0, CANVAS.HEIGHT - WALL.SIZE * WALL.BOTTOM, CANVAS.WIDTH, WALL.SIZE * WALL.BOTTOM);
  }

  drawArrows(){
    if(this.arrows.includes(DIRECTIONS.LEFT)){
      this.ctx.drawImage(this.arrowImg, 
        0, 0, ARROW.SIZE, ARROW.SIZE,
        ARROW.OFFSET_SIDE, CANVAS.HEIGHT / 2 - ARROW.SCALED_SIZE / 2, ARROW.SCALED_SIZE, ARROW.SCALED_SIZE
      );
    } 
    if(this.arrows.includes(DIRECTIONS.RIGHT)){
      this.ctx.drawImage(this.arrowImg, 
        ARROW.SIZE, ARROW.SIZE, ARROW.SIZE, ARROW.SIZE,
        CANVAS.WIDTH - ARROW.SCALED_SIZE - ARROW.OFFSET_SIDE, 
        CANVAS.HEIGHT / 2 - ARROW.SCALED_SIZE / 2, ARROW.SCALED_SIZE, ARROW.SCALED_SIZE
      );
    }
    if(this.arrows.includes(DIRECTIONS.UP)){
      this.ctx.drawImage(this.arrowImg, 
        ARROW.SIZE, 0, ARROW.SIZE, ARROW.SIZE,
        CANVAS.WIDTH / 2 - ARROW.SCALED_SIZE / 2, ARROW.OFFSET_MAIN, ARROW.SCALED_SIZE, ARROW.SCALED_SIZE
      );
    }
    if(this.arrows.includes(DIRECTIONS.DOWN)){
      this.ctx.drawImage(this.arrowImg, 
        0, ARROW.SIZE, ARROW.SIZE, ARROW.SIZE,
        CANVAS.WIDTH / 2 - ARROW.SCALED_SIZE / 2, CANVAS.HEIGHT - ARROW.SCALED_SIZE - ARROW.OFFSET_MAIN, ARROW.SCALED_SIZE, ARROW.SCALED_SIZE
      );
    }
  }

  handleDirections(){
    if(this.isDoorBetweenRooms(this.row + 1, this.col)){
      this.arrows.push(DIRECTIONS.DOWN);
      this.doors.push(
        new Door(this.ctx, 
          CANVAS.WIDTH / 2 - DOOR.WIDTH / 2, CANVAS.HEIGHT - WALL.SIZE * WALL.BOTTOM, DOOR.WIDTH, WALL.SIZE * WALL.BOTTOM
        )
      );
    }
    if(this.isDoorBetweenRooms(this.row - 1, this.col)){
      this.arrows.push(DIRECTIONS.UP);
      this.doors.push(
        new Door(this.ctx, CANVAS.WIDTH / 2 - DOOR.WIDTH / 2, 0, DOOR.WIDTH, WALL.SIZE * WALL.TOP)
      );
    }
    if(this.isDoorBetweenRooms(this.row, this.col - 1)){
      this.arrows.push(DIRECTIONS.LEFT);
      this.doors.push(
        new Door(this.ctx, 0, CANVAS.HEIGHT / 2 - DOOR.HEIGHT / 2, WALL.SIZE * WALL.SIDE,DOOR.HEIGHT)
      );
    }
    if(this.isDoorBetweenRooms(this.row, this.col + 1)) {
      this.arrows.push(DIRECTIONS.RIGHT);
      this.doors.push(
        new Door(this.ctx, 
          CANVAS.WIDTH - WALL.SIZE * WALL.SIDE, CANVAS.HEIGHT / 2 - DOOR.HEIGHT / 2,
          WALL.SIZE * WALL.SIDE, DOOR.HEIGHT
        )
      );
    }
  }

  setVendorPositions(){
    let vendorIndex = 0;
    
    let {top, bottom} = this.positions;
    const roomWidth = CANVAS.WIDTH - WALL.SIZE * WALL.SIDE * 2;
    
    const isTopDoor = this.arrows.includes(DIRECTIONS.UP)? 1 : 0;
    top += isTopDoor;
    const topDistanceBetween = (roomWidth - top * VENDOR.WIDTH)  / (top + 1);
    for(let i = 0; i < top; i++){
      if(!this.vendors[vendorIndex]) return;

      if(isTopDoor && i == Math.floor(top / 2)) continue;

      let x = WALL.SIZE * WALL.SIDE + topDistanceBetween * (i + 1) + VENDOR.WIDTH * i; 
      
      const y = VENDOR.TOP_OFFSET;
      this.vendors[vendorIndex++].setPosition(x, y);
    }
    
    const isBottomDoor = this.arrows.includes(DIRECTIONS.DOWN)? 1 : 0;
    bottom += isBottomDoor;

    const bottomDistanceBetween = (roomWidth - bottom * VENDOR.WIDTH)  / (bottom + 1);
    for(let i = 0; i < bottom; i++){
      if(!this.vendors[vendorIndex]) return;

      if(isBottomDoor && i == Math.floor(bottom / 2)) continue;
      
      const x = WALL.SIZE * WALL.SIDE + bottomDistanceBetween * (i + 1) + VENDOR.WIDTH * i;
      const y = CANVAS.HEIGHT - VENDOR.BOTTOM_OFFSET - VENDOR.HEIGHT;; 
      this.vendors[vendorIndex++].setPosition(x, y);
    }

    if(this.vendors.length > vendorIndex) {
      console.error(`There are more vendors set in room with ID:${this.id}, ${this.vendors.length} instead of ${this.positions.bottom + this.positions.top}`);
      for(let i = vendorIndex; i < this.vendors.length; i++)
      this.vendors[i].setPosition(10000, 10000);
    }
  }

  isDoorBetweenRooms(row, col){
    if(this.roomExists(row, col)){
      const room = MAP[row][col];
      return room.doors.includes(this.id);
    }
    return false;
  }

  roomExists(row, col) {
    return col >= 0  && row >= 0 && row < MAP.length && col < MAP[0].length && MAP[row][col] != null;
  }

  isDoor(x, y, width, height) {
    return this.doors.some(door => door.enters(x, y, width, height));
  }
}
