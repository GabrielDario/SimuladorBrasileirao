const retornarRodada = () => {
    nRodada++;
    return nRodada;
};

const gerarRodada = () => {
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

    console.log(timesDaRodada);
    console.log(clubeCopias);
};

const definirTime = (clubeCopias, x) => {
    let timeCopia = clubeCopias[Math.floor(Math.random() * x)].nome;
    clubeCopias = clubeCopias.filter(item => item != timeCopia);

    
    timesDaRodada.push(timeCopia);
    return clubeCopias;
}