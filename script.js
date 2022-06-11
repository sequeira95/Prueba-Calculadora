const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')
const operator = {
    AC: (display)=> borrar(display),
    "⟵":(display)=>borrarUno(display),
    "=": (display)=> calcular(display),
    actualizar: (display,btn)=> actualizar(display,btn)
}

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const btn = button.innerText
        calculator(btn, display)
    })

})
function calculator(btn,display){
    if( operator[btn]) return operator[btn] (display, btn)
    operator["actualizar"](display, btn)
}

function calcular(display){
    display.innerText = eval(display.innerText)
}
function actualizar(display,btn){
    if(display.innerText == 0){
        display.innerText = ""
    }
    display.innerText += btn.replaceAll("X","*")
}
function borrar(display){
    display.innerText = 0
}
const borrarUno= (display)=>{
    display.innerText = display.innerText.slice(0,-1)
}

