
const retornarRodada = () => {
    if(cancelarRodada == false) {
        nRodada++;
    }
   
    return nRodada;
};

const gerarRodada = () => {
    timesDaRodada = [];
    let clubeCopias = [];

    for (i = 0; i < clubes.length; i++) {
        clubeCopias.push(clubes[i].nome);
    }

    
    for (i = clubeCopias.length; i > 0 ; i--) {
        clubeCopias = definirTime(clubeCopias, i);
    }
    quebrarLinha();
    verificarEgerarRodada();
    escreverRodada();
};

const definirTime = (clubeCopias, x) => {
    let timeCopia = clubeCopias[Math.floor(Math.random() * x)];
    clubeCopias = clubeCopias.filter(item => item != timeCopia);

    timesDaRodada.push({ time: timeCopia });
    return clubeCopias;
}

const verificarEgerarRodada = () => {
    //Adicionando times na rodada
    for (let i = 0; confontoRodada.length < (clubes.length / 2); i = i + 2) {
        confontoRodada.push(timesDaRodada[i].time + timesDaRodada[i + 1].time);

    }
    //Confere com geral
    for (let i = 0; i <= confontoRodada.length - 1; i++) {
        for (let j = 0; j <= todosConfrontos.length - 1; j++) {
            if (confontoRodada[i] == todosConfrontos[j]) {
                timesDaRodada = [];
                confontoRodada = [];
                cancelarRodada = true; 
                tentativas++;
                break;
                
            } else {
                cancelarRodada = false;
            }
        }
    }
    //Coloca no todos os confrontos
    if(cancelarRodada == false) {
        for (let i = 0; i < clubes.length; i = i + 2) {
            todosConfrontos.push(timesDaRodada[i].time + timesDaRodada[i + 1].time);
            todosConfrontos.push(timesDaRodada[i + 1].time + timesDaRodada[i].time);
        }
    
    }
   
}

const escreverRodada = () => {

    const newDiv = document.createElement("div");
    newDiv.className = 'verde';
    for (i = 0; i < timesDaRodada.length; i = i + 2) {
        let golPrimeiroTime = verificarGols(gols);
        let golSegundoTime = verificarGols(gols);
        let criandoRodada = timesDaRodada[i].time + " " + golPrimeiroTime + " x " +
            golSegundoTime + " " + timesDaRodada[i + 1].time;
        const p = document.createElement("p");
        const criandoTexto = document.createTextNode(criandoRodada);
        p.appendChild(criandoTexto);
        span.appendChild(newDiv);
        newDiv.appendChild(p);
        timesDaRodada[i].golsRodada = golPrimeiroTime;
        timesDaRodada[i + 1].golsRodada = golSegundoTime;
    }


}

const quebrarLinha = () => {
    if (nRodada % 4 == 0 && cancelarRodada == false) {
        var br = document.createElement("br");
        spanId.appendChild(br);
    }
}

