//Lista de times e seu atributos
let clubes = [
    { nome: 'Palmeiras', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Botafogo', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Grêmio', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Bragantino', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Atlético-MG', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Flamengo', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Atlético-PR', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Fluminense', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Cuiabá', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'São Paulo', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },

    { nome: 'Corinthians', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Fortaleza', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Internacional', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Santos', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Vasco', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Bahia', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Cruzeiro', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Goiás', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'Coritiba', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
    { nome: 'América-MG', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 }];

//Botões
let rodada = document.getElementById("rodada");
let mostrarRodada = document.getElementById("mostrarRodada");
let mostrarTabela = document.getElementById("mostrarTabela");
let zerar = document.getElementById("zerar");

//Montar
const tabela = document.getElementById("tabela");
const span = document.querySelector("span");
const spanId = document.getElementById("spanId");
const verde = document.getElementById("verde");

//Variáveis auxiliares
let nRodada = 0;
var cancelarRodada = new Boolean(false);
let tentativas = 0;
var zerarRodada = new Boolean(false);
//Times
let todosConfrontos = [];
let timesDaRodada = [];
let confontoRodada = [];
const gerarTabela = () => {

    if (zerarRodada == true) {
        clubes = [
            { nome: 'Palmeiras', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Botafogo', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Grêmio', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Bragantino', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Atlético-MG', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Flamengo', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Atlético-PR', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Fluminense', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Cuiabá', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'São Paulo', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },

            { nome: 'Corinthians', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Fortaleza', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Internacional', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Santos', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Vasco', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Bahia', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Cruzeiro', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Goiás', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'Coritiba', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 },
            { nome: 'América-MG', pontos: 0, vitorias: 0, saldoGols: 0, golsRodada: 0 }];
    }

    clubes = ordenarTabela();
    const linha = tabela.insertRow(-1);
    const col1 = linha.insertCell(0)
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)
    const col4 = linha.insertCell(3)
    const col5 = linha.insertCell(4)

    col1.innerText = 'Posição';
    col1.style.fontWeight = '900';
    col2.innerText = 'Time';
    col2.style.fontWeight = '900';
    col3.innerText = 'Pontos';
    col3.style.fontWeight = '900';
    col4.innerText = 'Vitórias';
    col4.style.fontWeight = '900';
    col5.innerText = 'Saldo de Gols';
    col5.style.fontWeight = '900';

    for (let i = 0; i < clubes.length; i++) {
        const linha = tabela.insertRow(-1);
        const col1 = linha.insertCell(0)
        const col2 = linha.insertCell(1)
        const col3 = linha.insertCell(2)
        const col4 = linha.insertCell(3)
        const col5 = linha.insertCell(4)

        col1.innerText = i + 1 + "º";
        col2.innerText = clubes[i].nome;
        col3.innerText = clubes[i].pontos;
        col4.innerText = clubes[i].vitorias;
        col5.innerText = clubes[i].saldoGols;

    }
    zerarRodada = false;
};
const ordenarTabela = () => {

    clubes.sort(function (b, a) {
        if (a.pontos > b.pontos) {
            return 1;
        }
        if (a.pontos < b.pontos) {
            return -1;
        }
        return 0;
    });
    //Verificar pontos e vitorias
    for (i = 0; i < clubes.length - 1; i++) {
        if (clubes[i].pontos == clubes[i + 1].pontos) {
            if (clubes[i].vitorias < clubes[i + 1].vitorias) {
                let copairObjeto = clubes[i + 1];
                clubes[i + 1] = clubes[i];
                clubes[i] = copairObjeto;
            }
        }
    }
    //Verificar vitorias e saldo de gols
    for (i = 0; i < clubes.length - 1; i++) {
        if (clubes[i].vitorias == clubes[i + 1].vitorias && clubes[i].pontos == clubes[i + 1].pontos) {
            if (clubes[i].saldoGols < clubes[i + 1].saldoGols) {
                let copairObjeto = clubes[i + 1];
                clubes[i + 1] = clubes[i];
                clubes[i] = copairObjeto;
                i--;
            }
        }
    }

    return clubes;
}

const clicarRodada = () => {
    if (nRodada < (clubes.length - 1)) {
        tabela.innerHTML = "";
        gerarRodada();
        nRodada = retornarRodada();

        if (cancelarRodada == false) {
            gerenciarPontos();
        }

        gerarTabela();
        confontoRodada = [];

        if (cancelarRodada == true) {
            console.log(tentativas);
            clicarRodada();

        } else {
            cancelarRodada = false;
            alert("Quantas vezes troco de rodada até achar uma que não se repita: " + tentativas
                + "\n" + nRodada + "º Rodada");
            tentativas = 0;
        }
    } else {
        alert("A competição já está encerrada!\n " + clubes[0].nome + " CAMPEÃO!");
    }
    if (tentativas >= 500) {
        alert('Estourou!!');
        location.reload();
    }
}

rodada.addEventListener("click", e => {
    clicarRodada();
});

mostrarRodada.addEventListener("click", e => {

});

mostrarTabela.addEventListener("click", e => {
});

zerar.addEventListener("click", e => {
    clubes = [];
    todosConfrontos = [];
    nRodada = 0;
    spanId.innerHTML = "";
    tabela.innerHTML = "";
    zerarRodada = true;
    gerarTabela();
    nRodada = 0;
    tentativas = 0;
    alert("Campeonato zerado!");
});

window.addEventListener("load", () => {
    gerarTabela();

});