# Aula 016

## Conteúdo

- Diferença entre (==) para (===).
  - **==** Compara apenas o valor ( 1 == "1"; Retorna true).
  - **===** Compara o valor e o TIPO ( 1 === "1"; Retorna false).
- Livros legais:
  - Elegante Javascript (Eloquent Javascript) -> Iniciantes;
  - You Dont know JS, Kyle Simpson (GITHUB);
  - EcmaScript 2025 (Doc mais recomendada do JS atualmente)
- Entender um pouco mais sobre EventLoop
- Vimos setTimeout
```javascript
setTimeout(function(){
    console.log("Hello World");
}, 5000);
```

- Vimos recursão... (**VALE REVISÃO**).
```javascript
function fibonacci(n){
    if(n <=1 ){
        return n;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
```

- Como percorrer um arr com recursão?

- Como exibir uma lista na mesma linha em JS (Sem library);
```javascript
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let s = "";
    for(let i = 0; i < arr.length;i++){
        s += arr[i] + " ";
    }
    console.log(s.trim());
```

- **DESAFIO**
  - Escrever uma função que recebe uma string e retorna uma nova string com a primeira letra de cada palavra em maiúscula.

- Resolução:
```javascript
function cap(arg) {
    console.log(`Frase de entrada: "${arg}"`);
    let arrString = arg.split(" ");
    for (let i = 0; i < arrString.length; i++) {
        arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);
    }
    console.log(`Frase de saida: "${arrString.join(" ")}"`)
}

cap('estou testando')
```



### Desafio PESSOAL !!

- Estudar MAP (For bonito).
- Desafio de desenhar vários quadrados no P5 recursivos.