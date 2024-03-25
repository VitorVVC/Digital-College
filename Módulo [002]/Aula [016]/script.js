function cap(arg) {
    console.log(`Frase de entrada: "${arg}"`);
    let arrString = arg.split(" ");
    for (let i = 0; i < arrString.length; i++) {
        arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);
    }
    console.log(`Frase de saida: "${arrString.join(" ")}"`)
}

// cap('estou testando');

// Correção do professor \\ 
function primeiroLetraMaiuscula(str) {
    let arr = str.split(' ');
    let novaStr = '';

    for (let i = 0; i < arr.length; i++) {
        novaStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' ';
    }

    return novaStr;
}

// Correção do professor com maps
function primeiroLetraMaiusculaUmaLinha(str) {
    return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

let array = [5, 10, 15, 20, 25];
array.forEach((el) => console.log(el));
array.forEach((el) => console.log(el * 2));
array.map((i) => console.log(i));

let titulo = 'O mundo codificado';
// titulo.map((el) => console.log(el))

let pessoa = {
    nome: 'João',
    idade: 20,
    cidade: 'São paulo',
    pais: 'Brasil',

    falar: function () {
        
    }
}