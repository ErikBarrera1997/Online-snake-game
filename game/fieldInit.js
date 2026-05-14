// Crear aplicación PixiJS
const app = new PIXI.Application();

app.init({ 
  width: GAME_SETTINGS.SIZE.WIDTH * TILE_SIZE, 
  height: GAME_SETTINGS.SIZE.HEIGHT * TILE_SIZE, 
  backgroundColor: GAME_SETTINGS.MAP.BACKGROUND_COLOR 
}).then(() => {
  document.getElementById("field").appendChild(app.canvas);

  // Crear figura (un cuadrado verde)
  square = new PIXI.Graphics(); // Asignación a variable global
  square.beginFill(0x2ecc71);
  square.drawRect(0, 0, TILE_SIZE, TILE_SIZE);
  square.endFill();
  app.stage.addChild(square);

  // Posición inicial
  square.x = 135;
  square.y = 135;
});
