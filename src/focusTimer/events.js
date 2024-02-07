import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from './elements.js'
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action //action pode ser qualquer nome, desde que seja igual ao do html.

        if(typeof actions[action] != 'function') { //no clique do botão só aceita se houver uma função.
            return
        }

        actions[action]()
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => { // quando o elemento perceber que está em 'focus' vai executar uma função para deixar o campo vazio.
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key) // conteúdo só vai aceitar número.

    el.minutes.addEventListener('blur', (event) => { //blur é o contrário de focus, não focado.
        let time = event.currentTarget.textContent //ta acessando oque está dentro do conteúdo.
        time = time > 60 ? 60 : time //não permite que seja acima de 60.
        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}