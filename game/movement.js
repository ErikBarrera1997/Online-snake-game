// Direccion actual y control de tiempo
let currentDirection = { x: 0, y: 0 };
let moveAccumulator = 0;
const MOVE_INTERVAL_MS = 120; // Intervalo de movimiento en milisegundos

// Pre-cálculo de límites para optimizar rendimiento
const MAX_WIDTH = GAME_SETTINGS.SIZE.WIDTH * TILE_SIZE;
const MAX_HEIGHT = GAME_SETTINGS.SIZE.HEIGHT * TILE_SIZE;

/**
 * Verifies if the next position is outside the game boundaries.
 */
function isBorder(x, y) {
  return x < 0 || y < 0 || x + TILE_SIZE > MAX_WIDTH || y + TILE_SIZE > MAX_HEIGHT;
}
  //console.log(squares.length);
function moveSquare() {
  if (!square || (currentDirection.x === 0 && currentDirection.y === 0)) return;

  const nextX = square.x + currentDirection.x * TILE_SIZE;
  const nextY = square.y + currentDirection.y * TILE_SIZE;

  if (!isBorder(nextX, nextY)) {
      let prevX = square.x;
      let prevY = square.y;

      square.position.set(nextX, nextY);

      for (let i = 0; i < squares.length; i++) {
            const sq = squares[i];
            const currentX = sq.x;
            const currentY = sq.y;
      
            sq.position.set(prevX, prevY);
      
            prevX = currentX;
            prevY = currentY;
      }
  } else {
    currentDirection = { x: 0, y: 0 };
  }
}

//Continous movement using ticker
app.ticker.add((ticker) => {
  moveAccumulator += ticker.elapsedMS;

  while (moveAccumulator >= MOVE_INTERVAL_MS) {
    moveSquare();
    moveAccumulator -= MOVE_INTERVAL_MS;
  }
});

// Keyboard event listener for movement
window.addEventListener("keydown", (e) => {
  if (!square) return;

  const directions = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 }
  };

  if (directions[e.key]) {
    currentDirection = directions[e.key];
    moveAccumulator = MOVE_INTERVAL_MS;
  }
});
