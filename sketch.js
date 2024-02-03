let snake;
let cols;
let rows;
let direction;
let lastUpdateTime;
const moveInterval = 100; // Snake movement interval in milliseconds

function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  cols = 20;
  rows = 20;
  cellSize = (width / cols) * (height / rows);
  snake = new Snake(cols, rows);
  direction = "left";
  lastUpdateTime = millis();
}

function draw() {
  background(0);

  // Check if enough time has passed to move the snake
  if (millis() - lastUpdateTime > moveInterval) {
    snake.move(direction);
    lastUpdateTime = millis();
  }

  snake.show();
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
