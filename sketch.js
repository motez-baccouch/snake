let snake;
let cols;
let rows;
let direction;
let lastUpdateTime;
let fruit_X;
let fruit_Y;
const moveInterval = 100; // Snake movement interval in milliseconds

function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  cols = 20;
  rows = 20;
  cellSize = (width / cols) * (height / rows);
  snake = new Snake(cols, rows);
  direction = "left";
  SpawnFruit();
  lastUpdateTime = millis();
}

function draw() {
  background(0);

  // Check if enough time has passed to move the snake
  if (millis() - lastUpdateTime > moveInterval) {
    snake.move(direction);
    lastUpdateTime = millis();
  }
  if(snake.eat(fruit_X,fruit_Y)){
    SpawnFruit();
  }
  snake.show();
  fill(255,0,0)
  ellipse((0.5+fruit_X)*(width/cols),(0.5+fruit_Y)*(height/rows),(width/cols),(height/rows)) 
  
  //snake.collision()
}

function keyPressed() {
  if (keyCode === DOWN_ARROW && direction !== "up") {
    direction = "down";
  }
  if (keyCode === UP_ARROW && direction !== "down") {
    direction = "up";
  }
  if (keyCode === LEFT_ARROW && direction !== "right") {
    direction = "left";
  }
  if (keyCode === RIGHT_ARROW && direction !== "left") {
    direction = "right";
  }
  return false; // Prevent default
}

function SpawnFruit(){
   do {
  fruit_X=Math.floor(random(cols));
  fruit_Y=Math.floor(random(rows));
   } while (snake.snakePositions(fruit_X,fruit_Y));
   console.log(fruit_X+" "+fruit_Y)
}
