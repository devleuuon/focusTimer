import state from "./state.js";
import * as el from './elements.js'
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function countDown() {
    clearTimeout(state.countDownId) //limpa o timeout, fazendo que ele não pule 1s com todo clique no botão.

    if(!state.isRunning) { // verifica se o estado não está correndo.
        return // se for falso retorna.
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes <0) {
        reset() //troca o botão de pause para o play quando zerar.
        kitchenTimer.play() //som da aplicação.
        return
    }

    updateDisplay(minutes, seconds)
    state.countDownId = setTimeout(() => countDown(), 1000) // setTimeout inicia a aplicação depois do tempo estipulado, no caso 1s. necessário ter cleartimeout para não pular.
} //countDown é chamada novamente e fica rodando até clicar novamente, quando clicar ela retorna falso como foi definido na linha 5.

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes //verifica se o dado é null, se for volta ao estado natural definido.
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0') //define 2 digitos para o número e acrescenta o '0' antes, para a hora não fica "6:6".
    el.seconds.textContent = String(seconds).padStart(2, '0')
}