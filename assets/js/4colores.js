const boxs = document.querySelectorAll('.box')



boxs.forEach((e)=>{
    e.style.height = '200px'
    e.style.width = '200px'
    e.style.display = 'flex'
    e.style.justifyContent = 'center'
    e.style.alignItems = 'center'
    e.style.fontSize = '2rem'
    e.style.borderRadius = '2rem'
})

console.log(boxs)

