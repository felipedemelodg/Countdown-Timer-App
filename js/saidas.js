import { elemento } from "./elementos.js"
export function log(msg){
    const paragrafo = document.createElement('p')
    paragrafo.className = 'temp'
    paragrafo.innerText = msg
    elemento.logDeErros.appendChild(paragrafo)
    limparLog()
    return 'invalido'
}
function limparLog(){
    const temp = Object.values(document.getElementsByClassName('temp'))
    temp.forEach(el=>{
        setTimeout(()=>{
            el.remove()
        },5000)
    })
}