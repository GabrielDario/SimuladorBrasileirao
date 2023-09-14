let gols = Math.floor(Math.random() * 165 + 1);


const gerenciarPontos = () => {
    console.log('Gerenciou');
    console.log(timesDaRodada);

    compararGols();
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
    let aux;
    for (i = 0; i < 8; i = i + 2) {
        if (timesDaRodada[i].golsRodada > timesDaRodada[i + 1].golsRodada) {
            console.log('time 1 ganhou');

            for(i = 0; i < clubes.length; i++) {
                console.log(clubes[i].nome);
                if(clubes[i].nome == timesDaRodada[i].time) {
                    console.log('Axou')
                    aux = i;
                }
            }
         
            let posicao1 = clubes.indexOf(timesDaRodada[i].time);
    
            clubes[posicao1].pontos = grupo[posicao1].pontos + 3;
    
        //    grupo[posicao1].saldoGols = grupo[posicao1].saldoGols + Number(golsPrimeiroTime - golsSegundoTime);
          //  grupo[posicao2].saldoGols = grupo[posicao2].saldoGols + Number(golsSegundoTime - golsPrimeiroTime);

        } else if (timesDaRodada[i].golsRodada < timesDaRodada[i + 1].golsRodada) {
            console.log('time 2 ganhou');
        } else {
            console.log('Empatou');
        }
    }
}
