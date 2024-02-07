let darkMode = true
const buttonToggle = document.querySelector('#toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')

    //acessibilidade

    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode //faz a troca dos botões light e dark
})