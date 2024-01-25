
/*VARIABLE Y CONSTANTES*/
const body = document.querySelector("body")
const colors = document.querySelectorAll("input")
/*FUNCIONES*/
const pintar = (click, color='green') => {
    if(click.target.nodeName === 'P') return click.target.style.backgroundColor = colors[0].value
    if(click.target.nodeName === 'DIV') return click.target.style.backgroundColor = colors[1].value
    if(click.target.nodeName === 'H3') return click.target.style.backgroundColor = colors[2].value
    return 
}
/*EVENTOS*/
body.addEventListener("click",pintar)
