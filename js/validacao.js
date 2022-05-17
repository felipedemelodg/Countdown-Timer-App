import { erros } from "./erros.js";
import { tratamentos } from "./formatacao.js";
import { elemento } from "./elementos.js";

const diaAtual = elemento.diaAtual;
const mesAtual = elemento.mesAtual + 1;
const anoAtual = elemento.anoAtual;
const horaAtual = elemento.horaAtual;
const minutoAtual = elemento.minutoAtual;
const padrao = (el) => {
  const obj = {};
  obj.value = el.value;
  obj.nome = el.name;
  obj.erros = {
    vazio: erros.verSeEsta(el.value, ""),
    indefinido: erros.verSeEsta(el.value, undefined),
  };
  obj.listaDeErros = erros.lista(obj.erros);
  obj.numeroDeErros = erros.numeros(obj.listaDeErros);
  obj.validado = erros.diagnostico(
    obj.nome,
    obj.listaDeErros,
    obj.numeroDeErros,
    obj.value
  );
  return obj.validado
};

const tratamentoParaData = (data) => {
  const obj = {};
  obj.value = data.value;
  obj.nome = data.name;
  obj.dataFormatada = tratamentos.dataFormatada(obj.value);
  obj.dia = tratamentos.dia(obj.dataFormatada);
  obj.mes = tratamentos.mes(obj.dataFormatada);
  obj.ano = tratamentos.ano(obj.dataFormatada);

  obj.erros = {
    vazio: erros.verSeEsta(obj.value, ""),
    "ano invalido": erros.anoInvalido(obj.ano, anoAtual),
    "mes invalido": erros.mesInvalido(obj.mes, obj.ano, mesAtual, anoAtual),
    "dia invalido": erros.diaInvalido(
      obj.ano,
      anoAtual,
      obj.mes,
      mesAtual,
      obj.dia,
      diaAtual
    ),
  };
  obj.data = { dia: obj.dia, mes: obj.mes, ano: obj.ano };
  obj.listaDeErros = erros.lista(obj.erros);
  obj.numeroDeErros = erros.numeros(obj.listaDeErros);
  obj.validado = erros.diagnostico(
    obj.nome,
    obj.listaDeErros,
    obj.numeroDeErros,
    obj.data
  );

  return obj.validado;
};
const tratamentoParaHora = (hora, dia) => {
  console.log();
  const obj = {};
  obj.value = hora.value;
  obj.nome = hora.name;
  obj.hora = tratamentos.horas(obj.value);
  obj.minutos = tratamentos.minutos(obj.value);
  obj.erros = {
    vazio: erros.verSeEsta(obj.value),
    "hora invalida": erros.horaInvalida(obj.hora, horaAtual, dia, diaAtual),
    "minuto invalido": erros.minutoInvalido(
      obj.minutos,
      minutoAtual,
      obj.hora,
      horaAtual,
      dia,
      diaAtual
    ),
  };
  obj.listaDeErros = erros.lista(obj.erros);
  obj.numeroDeErros = erros.numeros(obj.listaDeErros);
  obj.validado = erros.diagnostico(
    obj.nome,
    obj.listaDeErros,
    obj.numeroDeErros,
    { horas: obj.hora, minutos: obj.minutos }
  );
  return obj.validado;
};
export const valida = { padrao, tratamentoParaData, tratamentoParaHora };
