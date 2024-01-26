
/*VARIABLE Y CONSTANTES*/
const main = document.querySelector("main")
const colors = document.querySelectorAll("input")
/*FUNCIONES*/
const pintar = (click, color = 'green') => {
    if (click.target.nodeName.toLowerCase() === 'p') return click.target.style.backgroundColor = colors[0].value
    if (click.target.nodeName.toLowerCase() === 'div') return click.target.style.backgroundColor = colors[1].value
    if (click.target.nodeName.toLowerCase() === 'h3') return click.target.style.backgroundColor = colors[2].value
    return
}
/*EVENTOS*/
main.addEventListener("click", pintar)
