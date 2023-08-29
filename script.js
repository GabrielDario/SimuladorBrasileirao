//Lista de times e seu atributos
let clubes = [{ nome: 'São Paulo',pontos: 0, saldoGols: 0, vitorias: 0 },
{ nome: 'Vasco',pontos: 0, saldoGols: 0, vitorias: 0  },
{ nome: 'Inter' ,pontos: 0, saldoGols: 0, vitorias: 0 },
{ nome: 'Grêmio' ,pontos: 0, saldoGols: 0, vitorias: 0 },
{ nome: 'Flamengo',pontos: 0, saldoGols: 0, vitorias: 0  },
{ nome: 'Goiás' ,pontos: 0, saldoGols: 0, vitorias: 0 },
{ nome: 'Palmeiras' ,pontos: 0, saldoGols: 0, vitorias: 0 },
{ nome: 'Cruzeiro' ,pontos: 0, saldoGols: 0, vitorias: 0 }];

//Botões
let rodada = document.getElementById("rodada");
let mostrarRodada = document.getElementById("mostrarRodada");
let mostrarTabela = document.getElementById("mostrarTabela");
let zerar = document.getElementById("zerar");

//Montar
const tabela = document.querySelector("table");
const span = document.querySelector("span");

//Variáveis auxiliares
let nRodada = 0;

//Times
let todosConfrontos = [];
let timesDaRodada = [];

rodada.addEventListener("click", e => {
    nRodada = retornarRodada();
    gerarRodada();
});

tabela.addEventListener("click", e => {
});

zerar.addEventListener("click", e => {

});