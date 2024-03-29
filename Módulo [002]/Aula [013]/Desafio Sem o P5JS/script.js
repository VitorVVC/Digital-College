function geraQuadrado() {
    const quantidadeInput = document.querySelector('.quantidade');
    // const quantidade = parseInt(quantidadeInput.value);


    const container = document.querySelector('.container');
    container.innerHTML = ""; // Somente para limpar o container;

    const posicoes = [];

    for (let i = 0; i < 4; i++) {
        const quadrado = document.createElement("div");
        quadrado.classList.add('quadrado');

        let posicaoX, posicaoY
        do {
            posicaoX = (Math.random() * 7.5) * 50; 
            posicaoY = (Math.random() * 8.5) * 50;
        } while (!posicaoJaExiste(Math.floor(posicaoX),Math.floor(posicaoY),posicoes));

        posicoes.push(`${posicaoX},${posicaoY}`);
        quadrado.style.left = posicaoX + "px";
        quadrado.style.top = posicaoY + "px";

        quadrado.style.background = geraCorAleatoria();
        container.appendChild(quadrado);
    }

    function posicaoJaExiste(x, y, posicoes) {
        for (let i = 0; i < posicoes.length; i++) {
            const [px, py] = posicoes[i].split(',');
            // TODO --> Tentar corrigir o método para considerar -50 do tamanho original, já como "igual";
            const tamanhoPxX = parseInt(px) - 50;
            const tamanhoPxY = parseInt(py) - 50;
        
            // TODO --> Testar && Caso não funcionar, testar utilizar m20 para todos os quadrados, e contabilizar no calculo.
            if(tamanhoPxX <= x && tamanhoPxX >= x + 50 && tamanhoPxY <= y && tamanhoPxY >= x + 50){
                return true;
            }
                
            if (parseInt(px) === x && parseInt(py) === y) {
                return true;
            }
        }
        return false;
    }

    function geraCorAleatoria() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
}

geraQuadrado();