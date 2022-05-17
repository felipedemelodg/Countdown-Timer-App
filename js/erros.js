import { log } from "./saidas.js";
const verSeEsta = (valor, condicao) => (valor == condicao ? true : false);

const numeros = (lista) => lista.length;
const lista = (erros) => {
  const err = [];
  const lista = [];
  err.push(Object.entries(erros));
  for (let i = 0; i < err[0].length; i++) {
    if (err[0][i][1] == true) {
      lista.push(err[0][i][0]);
    }
  }
  return lista;
};

const diagnostico = (nome, listaDeErros, numeroDeErros, valor) => {
  return numeroDeErros != 0 ? log(`${nome} esta ${listaDeErros}`) : valor;
};

const anoInvalido = (anoDoEvento, anoAtual) => {
  return anoDoEvento >= anoAtual ? false : true;
};

const mesInvalido = (mesDoEvento, anoDoEvento, mesAtual, anoAtual) => {
  return anoDoEvento == anoAtual && mesDoEvento >= mesAtual
    ? false
    : anoDoEvento > anoAtual
    ? false
    : true;
};

const diaInvalido = (
  anoDoEvento,
  anoAtual,
  mesDoEvento,
  mesAtual,
  diaDoEvento,
  diaAtual
) => {
  return anoDoEvento == anoAtual &&
    mesDoEvento == mesAtual &&
    diaDoEvento >= diaAtual
    ? false
    : anoDoEvento == anoAtual && mesDoEvento > mesAtual
    ? false
    : anoDoEvento > anoAtual
    ? false
    : true;
};

const horaInvalida = (horaDoEvento, horaAtual, diaDoEvento, diaAtual) => {
  return diaDoEvento == diaAtual && horaDoEvento >= horaAtual
    ? false
    : diaDoEvento > diaAtual
    ? false
    : true;
};

const minutoInvalido = (
  minutoDoEvento,
  minutoAtual,
  horaDoEvento,
  horaAtual,
  diaDoEvento,
  diaAtual
) => {
  return diaDoEvento == diaAtual &&
    horaDoEvento == horaAtual &&
    minutoDoEvento >= minutoAtual
    ? false
    : diaDoEvento == diaAtual && horaDoEvento > horaAtual
    ? false
    : diaDoEvento > diaAtual
    ? false
    : true;
  
};

export const erros = {
  verSeEsta,
  numeros,
  lista,
  diagnostico,
  anoInvalido,
  mesInvalido,
  diaInvalido,
  horaInvalida,
  minutoInvalido,
};
