let cores = [];
let quadrados = [];

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  cores = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255), color(255, 255, 0)];
}

function draw() {
  background(220);
  
  const alturaLarguraPadrao = 50;
  
  for (let i = 0; i < 4; i++) {
    let posicaoValida = false;
    let randomX, randomY;
    
    while (!posicaoValida) {
      randomX = random(width - alturaLarguraPadrao);
      randomY = random(height - alturaLarguraPadrao);
      
      posicaoValida = true;
      for (let j = 0; j < quadrados.length; j++) {
        const outroQuadrado = quadrados[j];
        if (dist(randomX, randomY, outroQuadrado.posX, outroQuadrado.posY) < alturaLarguraPadrao) {
          posicaoValida = false;
          break;
        }
      }
    }
    
    quadrados.push({ posX: randomX, posY: randomY });
    fill(cores[i]);
    rect(randomX, randomY, alturaLarguraPadrao, alturaLarguraPadrao);
  }
}