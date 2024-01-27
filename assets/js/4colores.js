/*declaracion de funciones */
const colorear = (event) => {
    if (event.outerText.toLowerCase() === 'azul') return event.style.backgroundColor = 'blue'
    if (event.outerText.toLowerCase() === 'rojo') return event.style.backgroundColor = 'red'
    if (event.outerText.toLowerCase() === 'verde') return event.style.backgroundColor = 'green'
    if (event.outerText.toLowerCase() === 'amarillo') return event.style.backgroundColor = 'yellow'
}
const createDiv = (color) => {
    const div = document.createElement('div')
    div.style.backgroundColor = color
    document.querySelector('#part3').appendChild(div).setAttribute('class', 'newDiv')
}
/*CREANDO ELEMENTOS HTML POR JS, Y AGREGANDO ESTILOS */
document.querySelectorAll('.box').forEach((event) => {
    event.style.height = '200px'
    event.style.width = '200px'
    event.style.display = 'flex'
    event.style.justifyContent = 'center'
    event.style.alignItems = 'center'
    event.style.fontSize = '2rem'
    event.style.borderRadius = '2rem'
    event.addEventListener('click', () => {
        if (event.style.backgroundColor !== 'black') {
            event.style.backgroundColor = 'black'
            event.style.color = 'white'
            return
        }
        event.style.color = 'black'
        colorear(event)
    })
    colorear(event)
})
document.querySelector('#part2').appendChild(document.createElement('div')).setAttribute('id', 'key')
/* declaracion de variables */
const key = document.querySelector('#key')
/*declarando eventos de escucha */
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'a') return key.style.backgroundColor = 'red'
    if (event.key.toLowerCase() === 's') return key.style.backgroundColor = 'orange'
    if (event.key.toLowerCase() === 'd') return key.style.backgroundColor = 'pink'
    if (event.key.toLowerCase() === 'q') return createDiv('purple')
    if (event.key.toLowerCase() === 'w') return createDiv('grey')
    if (event.key.toLowerCase() === 'e') return createDiv('#804000')
})