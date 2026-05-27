// Crear aplicación PixiJS
const app = new PIXI.Application();

app.init({ 
  width: GAME_SETTINGS.SIZE.WIDTH * TILE_SIZE, 
  height: GAME_SETTINGS.SIZE.HEIGHT * TILE_SIZE, 
  backgroundColor: GAME_SETTINGS.MAP.BACKGROUND_COLOR 
}).then(() => {
  document.getElementById("field").appendChild(app.canvas);

  square = new PIXI.Graphics(); // Asignación a variable global
  square.beginFill(0x2ecc71);
  square.drawRect(0, 0, TILE_SIZE, TILE_SIZE);
  square.endFill();
  app.stage.addChild(square);

  square2 = new PIXI.Graphics(); // Asignación a variable global
  square2.beginFill(0x2ecc71);
  square2.drawRect(0, 0, TILE_SIZE, TILE_SIZE);
  square2.endFill();
  app.stage.addChild(square2);

  squares.push(square2); // Agregar el cuadrado inicial a la lista de cuadrados
  //squares.push(square.clone()); 
  // Posición inicial
  square.x = 135;
  square.y = 135;

  square2.x = 105;
  square2.y = 135;
});
