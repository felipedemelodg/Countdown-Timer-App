const nomeDoEvento = document.getElementById('nome-do-evento')
const dataDoEvento = document.getElementById('data-do-evento')
const horaDoEvento = document.getElementById('hora-do-evento')
const botaoCriarEvento = document.getElementById('botao-criar-evento')
const formulario = document.getElementById('formulario-do-evento')
const logDeErros = document.getElementById('log-de-erros')
const tabela = document.getElementById('tabela')
const data = new Date()
const diaAtual = data.getDate()
const mesAtual = data.getMonth()
const anoAtual = data.getFullYear()
const horaAtual = data.getHours()
const minutoAtual = data.getMinutes()
export const elemento = {
    nomeDoEvento,
    dataDoEvento,
    horaDoEvento,
    botaoCriarEvento,
    formulario,
    logDeErros,
    diaAtual,
    mesAtual,
    anoAtual,
    horaAtual,
    minutoAtual,
    tabela
}