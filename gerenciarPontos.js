let gols = Math.floor(Math.random() * 165 + 1);


const gerenciarPontos = () => {
    compararGols(timesDaRodada);
};

const verificarGols = (gols) => {
    gols = Math.floor(Math.random() * 165 + 1);
    if (gols > 0 && gols <= 80) {
        gols = 0;
    } else if (gols > 80 && gols <= 100) {
        gols = 1;
    } else if (gols > 100 && gols <= 125) {
        gols = 2;
    } else if (gols > 125 && gols <= 140) {
        gols = 3;
    } else if (gols > 140 && gols <= 150) {
        gols = 4;
    } else if (gols > 150 && gols <= 155) {
        gols = 5;
    } else if (gols > 155 && gols <= 159) {
        gols = 6;
    } else if (gols > 159 && gols <= 162) {
        gols = 7;
    } else if (gols > 162 && gols <= 164) {
        gols = 8;
    } else if (gols == 165) {
        gols = 9;
    }
    return gols;
}

const compararGols = () => {
    let pT;
    let sT;
    let sgpT;
    let sgsT;
    for (i = 0; i < clubes.length; i = i + 2) { // PERCORRER OS TIMES
        
        for(j = 0; j < clubes.length; j++) { //Percorrer primeiro time esquerda
            timeGanhou = timesDaRodada[i].time;
            if(clubes[j].nome == timeGanhou) {
                pT = j;
            }
        }

        for(j = 0; j < clubes.length; j++) { //Percorrer primeiro time direita
            timeGanhou = timesDaRodada[i+1].time;
            if(clubes[j].nome == timeGanhou) {
                sT = j;
            }
        }0
 

        if (timesDaRodada[i].golsRodada > timesDaRodada[i + 1].golsRodada) {  
            clubes[pT].pontos = clubes[pT].pontos + 3;
            clubes[pT].vitorias = clubes[pT].vitorias + 1;

            sgpT = timesDaRodada[i].golsRodada - timesDaRodada[i+1].golsRodada;

            clubes[pT].saldoGols = clubes[pT].saldoGols + sgpT;
            clubes[sT].saldoGols = clubes[sT].saldoGols - sgpT;
        } else if (timesDaRodada[i].golsRodada < timesDaRodada[i + 1].golsRodada) {
            
            clubes[sT].pontos = clubes[sT].pontos + 3;
            clubes[sT].vitorias = clubes[sT].vitorias + 1;

            sgpT = timesDaRodada[i+1].golsRodada - timesDaRodada[i].golsRodada;

            clubes[pT].saldoGols = clubes[pT].saldoGols - sgpT;
            clubes[sT].saldoGols = clubes[sT].saldoGols + sgpT;
        } else {
            clubes[pT].pontos = clubes[pT].pontos + 1;
            clubes[sT].pontos = clubes[sT].pontos + 1;
       
        }
    }
}
