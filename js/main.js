import { elemento } from "./elementos.js";
import { valida } from "./validacao.js";
import { processo } from "./processamentos.js";

const diaAtual = elemento.diaAtual;
const mesAtual = elemento.mesAtual + 1;
const anoAtual = elemento.anoAtual;
const horaAtual = elemento.horaAtual;
const minutoAtual = elemento.minutoAtual;

function Dados() {
  const nome = valida.padrao(elemento.nomeDoEvento);
  const data = valida.tratamentoParaData(elemento.dataDoEvento);
  const hora = valida.tratamentoParaHora(elemento.horaDoEvento, data.dia);
  const ano = data.ano;
  const mes = data.mes;
  const dias = data.dia;
  const horas = hora.horas;
  const minutos = hora.minutos;
  return { nome, ano, mes, dias, horas, minutos };
}
function Timer() {
  const dados = Dados();
  const mesDoEvento = dados.mes;
  const diaDoEvento = dados.dias;
  const horaDoEvendo = dados.horas;
  const minutoDoEvento = dados.minutos;
  const obj = {};
  obj.diasFaltando = processo.diasFaltando(
    mesDoEvento,
    mesAtual,
    diaDoEvento,
    diaAtual
  );
  obj.horasFaltando = processo.horasFantando(
    diaDoEvento,
    diaAtual,
    horaDoEvendo,
    horaAtual,
    mesDoEvento,
    mesAtual
  );
  obj.minutosFaltando = processo.minutosFaltando(
    horaDoEvendo,
    horaAtual,
    minutoDoEvento,
    minutoAtual,
    diaDoEvento,
    diaAtual
  );
  obj.minutosFaltando < 60 ? (obj.horasFaltando = 0) : obj.horasFaltando;
  obj.minutosFaltando >= 60
    ? (obj.minutosFaltando = obj.minutosFaltando - 60)
    : obj.minutosFaltando;
  return {
    dias: obj.diasFaltando,
    horas: obj.horasFaltando,
    minutos: obj.minutosFaltando,
    segundos: 60,
  };
}
function Tabela() {
  const tr = document.createElement("tr");
  const tdNome = document.createElement("td");
  const tdData = document.createElement("td");
  const tdHora = document.createElement("td");
  const tdTimer = document.createElement("td");
  const tdAcoes = document.createElement("td");
  const botaoIniciarTimer = document.createElement("button");
  botaoIniciarTimer.innerText = "inicar";
  tdAcoes.appendChild(botaoIniciarTimer);
  tr.appendChild(tdNome);
  tr.appendChild(tdData);
  tr.appendChild(tdHora);
  tr.appendChild(tdTimer);
  tr.appendChild(tdAcoes);
  elemento.tabela.appendChild(tr);

  return { tdNome, tdData, tdHora, tdTimer, botaoIniciarTimer };
}

function cronometro(dias, horas, minutos, segundos, tabela) {
  const tempo = () =>
    (tabela.tdTimer.innerText = `${dias}:${horas}:${minutos}:${segundos}`);

  let cronSegundos;
  let cronMinutos;
  let cronHoras;
  let cronDias;

  cronSegundos = setInterval(() => {
    tempo();
    segundos--;
  }, 1000);
  if (minutos != 0) {
    cronMinutos = setInterval(() => {
      if (segundos == 0) {
        segundos = 10;
        minutos--;
      }
    });
  }
  if (horas != 0) {
    cronHoras = setInterval(() => {
      if (minutos == 0) {
        minutos = 3;
        horas--;
      }
    });
  }
  if (dias != 0) {
    cronDias = setInterval(() => {
      if (horas == 0) {
        horas = 3;
        dias--;
        if (dias == 0) {
          clearInterval(cronDias);
        }
      }
    });
  }

  const fimCronometro = setInterval(() => {
    if (dias == 0) {
      if (horas == 0) {
        clearInterval(cronHoras);
        if (minutos == 0) {
          clearInterval(cronMinutos);
          if (segundos == 0) {
            segundos = 0;
            tempo();
            clearInterval(cronSegundos);
            clearInterval(fimCronometro);
          }
        }
      }
    }
  });
}
function Display() {
  const timer = Timer();
  const dias = timer.dias;
  const horas = timer.horas;
  const minutos = timer.minutos;
  const segundos = timer.segundos;

  return { dias, horas, minutos, segundos };
}
function main(e) {
  e.preventDefault();
  const dados = Dados();
  const display = Display();

  if (dados.nome !== "invalido" && dados.dias !== undefined) {
    let tabela = Tabela();
    const celulaDoTimer = tabela.tdTimer;
    tabela.tdNome.innerText = dados.nome;
    tabela.tdData.innerText = `${dados.dias}/${dados.mes}/${dados.ano}`;
    tabela.tdHora.innerText = `${dados.horas}:${dados.minutos}`;
    celulaDoTimer.innerText = `${display.dias}:${display.horas}:${display.minutos}:${display.segundos}`;
    function cron() {
      cronometro(
        display.dias,
        display.horas,
        display.minutos,
        display.segundos,
        tabela
      );
    }
    tabela.botaoIniciarTimer.addEventListener("click", cron, false);
  }
}
elemento.botaoCriarEvento.addEventListener("click", main, false);
