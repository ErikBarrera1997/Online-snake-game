/**
 * Verifies if the next position is outside the game boundaries
 */
function isBorder(x, y) {
  const maxWidth = GAME_SETTINGS.SIZE.WIDTH * TILE_SIZE;
  const maxHeight = GAME_SETTINGS.SIZE.HEIGHT * TILE_SIZE;
  return x < 0 || y < 0 || x + TILE_SIZE > maxWidth || y + TILE_SIZE > maxHeight;
}

//Keyboard event listener for movement
window.addEventListener("keydown", (e) => {
  if (!square) return; // Esperar a que el objeto esté inicializado

  const step = 10;
  let nextX = square.x;
  let nextY = square.y;

  if (e.key === "ArrowUp") nextY -= step;
  if (e.key === "ArrowDown") nextY += step;
  if (e.key === "ArrowLeft") nextX -= step;
  if (e.key === "ArrowRight") nextX += step;

  if (!isBorder(nextX, nextY)) {
    square.x = nextX;
    square.y = nextY;
  }
});