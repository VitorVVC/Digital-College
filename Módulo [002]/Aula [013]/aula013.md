# Aula 013

## Conteúdo

- Iniciamento de JS (Oque é um algoritmo?);
- Recomendações: 
  - [*Hacker Rank!!*](https://www.hackerrank.com/dashboard).
  - [*Leetcode*](https://leetcode.com/accounts/social/signup/). 
  - [*Beecrowd*](https://judge.beecrowd.com/en).

## Códigos vistos por via P5JS:

### Desenha um quadrado ao centro
```javascript
function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220,0,0);
  rectMode(CENTER);
  rect(200,200,50,50);
}
```

### Desenha uma bolinha em vários locais da tela
```javascript
function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220,0,0);
  strokeWeight(10);
  point(random(200),random(200));
  console.log(random(200));
}
```

### Desenha um quadrado que anda
```javascript
let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
}

function draw() {
  background(220,0,0);
  rectMode(CENTER);
  rect(x,y,50,50);
  x += 1;
  if(x == 400){
    x = 200;
  }
}
```

### Mini desafio
```javascript
// Desafio:
// Criar outros dois quadrados com variaveis

let x;
let y;

let a;
let b;

let n;
let m;

function setup() {
  createCanvas(400, 400);
  // Primeiro quadrado
  x = 200;
  y = 200;
  // Segundo quadrado
  a = 300;
  b = 200;
  // Terceiro quadrado
  n = 200;
  m = 100;
}

function draw() {
  background(220,0,0);
  rectMode(CENTER);
  rect(x,y,50,50);
  rect(a,b,50,50);
  rect(n,m,50,50);
  // Itera sob o primeiro quadrado e quando o mesmo bater na "parede"     retorna pro mesmo valor
  x += 1;
  if(x == 400){
    x = 200;
  }
  // Itera sob o segundo quadrado e quando o mesmo bater na "parede" de   baixo, retorna pro mesmo valor
  b += 1;
  if(b == 400){
    b = 200
  }
  // Itera sob o terceiro quadrado e quando seus irmãos baterem na          parede ele retorna para posicao origem
  m += 1;
  if (m == 300){
    m = 100;
  }
}
```

### Mini desafio com obj
```javascript
function setup() {
  createCanvas(400, 400);
  frameRate(1);

}

function draw() {
  background(220,0,0);
  rectMode(CENTER);
  const quadradoUm = criaQuadrado(random(400),random(400),random(100),random(100));
  rect(quadradoUm.xCoord,quadradoUm.yCoord,quadradoUm.altura,quadradoUm.largura);
  
  const quadradoDois = criaQuadrado(random(400),random(400),random(100),random(100));
  rect(quadradoDois.xCoord,quadradoDois.yCoord,quadradoDois.altura,quadradoDois.largura);

}

function criaQuadrado(x,y,a,l){
    const quadrado = {
      xCoord: x,
      yCoord: y,
      altura: a,
      largura: l
    };
  return quadrado;
}
```

### Desafio circulos maneiros
```javascript
// Desafio: Circulos legais

function setup(){
  createCanvas(400,400);
}

function draw(){
  background('beige');
  noFill();
  let alt = 25;
  ellipse(200,200,alt,alt);
  for(let i = 0; i < 400; i++){
      alt += 25
      ellipse(200,200,alt,alt);
  }
}
``` 

### Desafio circulos maneiros corrigido 
```javascript
// Desafio: Circulos legais
let raio;

function setup(){
  createCanvas(400,400);
  background('beige');
  raio = 25;
  frameRate(2);
}

function draw(){
  noFill();
  ellipse(200,200,raio,raio);
  raio = raio + 10;

}
```

### Desafio circula indo direita p esquerda
```javascript
let posX,posY;
let vel;
function setup(){
  createCanvas(400,400);
  posX = width/2;
  posY = height/2;
  vel = 2;
}

function draw(){
  background('beige');
  fill(0);
  rect(posX,posY,25,25);
  posX += vel;
  if(posX >= width - 25) {
    vel = vel * -1;
  }
  if(posX <= 0){
    vel = vel * -1;
  }
}
```

### Desafio para casa: Fazer quatro quadrados randomicos não se tocarem

```javascript
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
```