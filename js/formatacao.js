import { elemento } from "./elementos.js";

const dataFormatada = (data) => data.split('-').reverse().join('')
const dia = (data)=> `${data[0]}${data[1]}`
const mes = (data)=> `${data[2]}${data[3]}`
const ano = (data)=> `${data[4]}${data[5]}${data[6]}${data[7]}`
const horas = (hora) => `${parseInt(hora[0])}${parseInt(hora[1])}`
const minutos = (hora) => `${hora[3]}${hora[4]}`
export const tratamentos = {
    dataFormatada,
    dia,
    mes,
    ano,
    horas,
    minutos
}