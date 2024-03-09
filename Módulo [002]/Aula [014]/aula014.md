# Aula 014

## Conteúdo:

- Leve revisão sob declaração de variaveis em JS.
- Alguns exercicios no P5, que estarão abaixo.

### Script simples sob if - else:

```javascript
var idade = 50;

if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}
```

### Script para a bola bater nos quatro cantos e retornar
```javascript
let x,y,velocidade;

function setup() {
  createCanvas(400, 400);
  strokeWeight(15);
  x = width / 2;
  y = height / 2;
  velocidade = 1.5;
}

function draw(){
  background(255,0,0)
  point(x,y);
  x += velocidade;
  y += velocidade * 2;
  if(x >= width || x <= 0)velocidade = velocidade * -1;
  if(y >= height || y <= 0)velocidade = velocidade * -1;
}
```
### Script para a bola bater em formato quadrado
```javascript
let x,y,velocidade;

function setup() {
  createCanvas(400, 400);
  strokeWeight(15);
  x = width / 2;
  y = height / 2;
  velocidade = 5;
}

function draw(){
    background(255,0,0)
    point(x,y-100);

    if(x >= 100 && x <= 200 && y <= 200){
      x += velocidade;
    }
    if(x >= 200 && x < 300 && y < 400){
      x += velocidade;
    }
    
    if(x >= 300 && y < 400){
      y += velocidade;
    }

    if(y >= 400 && x <= 300){
      x -= velocidade;
    }

    if(x <= 100){
      y -= velocidade
    }
    
}

```