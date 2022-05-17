const diasFaltando = (mesDoEvento, mesAtual, diaDoEvento, diaAtual) => {
  return mesDoEvento - mesAtual == 0
    ? diaDoEvento - diaAtual
    : (mesDoEvento - mesAtual) * 30 + (diaDoEvento - diaAtual);
};
const horasFantando = (diaDoEvento, diaAtual, horaDoEvendo, horaAtual) => {
  return diaDoEvento - diaAtual == 0
    ? horaDoEvendo - horaAtual
    : (diaDoEvento - diaAtual) * 24;
};
const minutosFaltando = (
  horaDoEvento,
  horaAtual,
  minutoDoEvento,
  minutoAtual,
  diaDoEvento,
  diaAtual
) => {
  return diaDoEvento - diaAtual == 0 && horaDoEvento == horaAtual
    ? minutoDoEvento - minutoAtual
    : diaDoEvento - diaAtual == 0 && horaDoEvento > horaAtual
    ? 60 - (minutoAtual - minutoDoEvento)
    : diaDoEvento - diaAtual > 0 && minutoDoEvento > minutoAtual
    ? minutoDoEvento - minutoAtual
    : 60 - (minutoAtual - minutoDoEvento);
};

export const processo = {
  diasFaltando,
  horasFantando,
  minutosFaltando,
};
