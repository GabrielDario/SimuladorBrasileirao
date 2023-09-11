

const retornarRodada = () => {
    nRodada++;
    return nRodada;
};

const gerarRodada = () => {
    timesDaRodada = [];
    let clubeCopias = [];

    for (i = 0; i < clubes.length; i++) {
        clubeCopias.push(clubes[i].nome);
    }

    clubeCopias = definirTime(clubeCopias, 8);
    clubeCopias = definirTime(clubeCopias, 7);
    clubeCopias = definirTime(clubeCopias, 6);
    clubeCopias = definirTime(clubeCopias, 5);
    clubeCopias = definirTime(clubeCopias, 4);
    clubeCopias = definirTime(clubeCopias, 3);
    clubeCopias = definirTime(clubeCopias, 2);
    clubeCopias = definirTime(clubeCopias, 1);
    
    quebrarLinha();
    verificarEgerarRodada();
    escreverRodada();
};

const definirTime = (clubeCopias, x) => {
    let timeCopia = clubeCopias[Math.floor(Math.random() * x)];
    clubeCopias = clubeCopias.filter(item => item != timeCopia);

    timesDaRodada.push(timeCopia);
    return clubeCopias;
}

const verificarEgerarRodada = () => {
    //Adiciona
    for (let i = 0; todosConfrontos.length < 4; i = i + 2) {

        todosConfrontos.push(timesDaRodada[i] + timesDaRodada[i + 1]);
    }

    //Verifica
}

const escreverRodada = () => {
 
    const newDiv = document.createElement("div");
    newDiv.className = 'verde';
    for (i = 0; i < timesDaRodada.length; i = i + 2) {
        let criandoRodada = timesDaRodada[i] + " x " + timesDaRodada[i + 1];
        const p = document.createElement("p");
        const criandoTexto = document.createTextNode(criandoRodada);
        p.appendChild(criandoTexto);
        span.appendChild(newDiv);
        newDiv.appendChild(p);
    }

}

const quebrarLinha = () => {
    console.log(nRodada)
    if(nRodada %4 == 0) {
        var br = document.createElement("br");
        spanId.appendChild(br);
    }
}