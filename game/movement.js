// Direccion actual y control de tiempo
let currentDirection = { x: 0, y: 0 };
let moveAccumulator = 0;
const MOVE_INTERVAL_MS = 120; // Intervalo de movimiento en milisegundos

/**
 * Verifies if the next position is outside the game boundaries.
 */
function isBorder(x, y) {
  const maxWidth = GAME_SETTINGS.SIZE.WIDTH * TILE_SIZE;
  const maxHeight = GAME_SETTINGS.SIZE.HEIGHT * TILE_SIZE;
  return x < 0 || y < 0 || x + TILE_SIZE > maxWidth || y + TILE_SIZE > maxHeight;
}

function moveSquare() {
  if (!square || (currentDirection.x === 0 && currentDirection.y === 0)) return;

  const nextX = square.x + currentDirection.x * TILE_SIZE;
  const nextY = square.y + currentDirection.y * TILE_SIZE;

  if (!isBorder(nextX, nextY)) {
    square.x = nextX;
    square.y = nextY;
  } else {
    currentDirection = { x: 0, y: 0 };
  }
}

// Bucle de movimiento continuo usando el ticker de PixiJS
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
