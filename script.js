//Lista de times e seu atributos
let clubes = [{ nome: 'São Paulo',pontos: 0,  vitorias: 0,saldoGols: 0, golsRodada: 0 },
{ nome: 'Vasco',pontos: 0,  vitorias: 0,saldoGols: 0,golsRodada: 0 },
{ nome: 'Inter' ,pontos: 0,  vitorias: 0 ,saldoGols: 0,golsRodada: 0 },
{ nome: 'Grêmio' ,pontos: 0,  vitorias: 0,saldoGols: 0,golsRodada: 0 },
{ nome: 'Flamengo',pontos: 0, vitorias: 0,saldoGols: 0 ,golsRodada: 0 },
{ nome: 'Goiás' ,pontos: 0,  vitorias:0 ,saldoGols: 0,golsRodada: 0 },
{ nome: 'Palmeiras' ,pontos: 0, vitorias: 0,saldoGols: 0,golsRodada: 0},
{ nome: 'Cruzeiro' ,pontos: 0,  vitorias: 0 ,saldoGols: 0,golsRodada: 0}];

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

//Times
let todosConfrontos = [];
let timesDaRodada = [];

const gerarTabela = () => {
 
    clubes = ordenarTabela();
    const linha = tabela.insertRow(-1);
    const col1 = linha.insertCell(0)  
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)
    const col4 = linha.insertCell(3)
    const col5 = linha.insertCell(4)

  col1.innerText = 'Posição' ;
  col1.style.fontWeight = '900';
  col2.innerText = 'Time' ;
  col2.style.fontWeight = '900';
  col3.innerText = 'Pontos' ;
  col3.style.fontWeight = '900';
  col4.innerText = 'Vitórias' ;
  col4.style.fontWeight = '900';
  col5.innerText = 'Saldo de Gols' ;
  col5.style.fontWeight = '900';
 
    for(let i = 0; i < 8; i++) {
        const linha = tabela.insertRow(-1);
        const col1 = linha.insertCell(0)  
        const col2 = linha.insertCell(1)
        const col3 = linha.insertCell(2)
        const col4 = linha.insertCell(3)
        const col5 = linha.insertCell(4)

      col1.innerText = i+1 + "º" ;
      col2.innerText = clubes[i].nome ;
      col3.innerText = clubes[i].pontos ;
      col4.innerText = clubes[i].vitorias ;
      col5.innerText = clubes[i].saldoGols ;
     
    }
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
    for (i = 0; i < clubes.length - 1; i++) {
        if (clubes[i].pontos == clubes[i + 1].pontos) {
            if (clubes[i].vitorias < clubes[i + 1].vitorias) {
                let copairObjeto = clubes[i + 1];
                clubes[i + 1] = clubes[i];
                clubes[i] = copairObjeto;
            }
        }
    }

    for (i = 0; i < clubes.length - 1; i++) {
        if (clubes[i].vitorias == clubes[i + 1].vitorias && clubes[i].pontos == clubes[i + 1].pontos) {
            if (clubes[i].saldoGols < clubes[i + 1].saldoGols) {
                let copairObjeto = clubes[i + 1];
                clubes[i + 1] = clubes[i];
                clubes[i] = copairObjeto;
            }
        }
    }

    return clubes;
}
rodada.addEventListener("click", e => {
    tabela.innerHTML = "";
    gerarRodada();
    nRodada = retornarRodada();
    gerenciarPontos();
    gerarTabela();
});

mostrarRodada.addEventListener("click", e => {
   
});

mostrarTabela.addEventListener("click", e => {
});

zerar.addEventListener("click", e => {

});

window.addEventListener("load", () => {
    gerarTabela();
});