const botao = document.querySelector("#btn")
const facil = document.querySelector("#f")
const medio = document.querySelector("#m")
const dificil = document.querySelector("#d")
const contador = document.querySelector("#cont")
const main = document.querySelector("main")
const resetar = document.querySelector("#reset")

var c = 0
contador.innerHTML = `Clicks: ${c}` 

facil.addEventListener('mousedown', function(e) {
    botao.style.transitionDuration = "3s"
})

medio.addEventListener('mousedown', function(e) {
    botao.style.transitionDuration = "1s"
})

dificil.addEventListener('mousedown', function(e) {
    botao.style.transitionDuration = "0.5s"
})

resetar.addEventListener("mousedown", function(e) {
    botao.style.top = "50vh"
    botao.style.left = "50vw"
    botao.style.transitionDuration = ""
    c = 0
    contador.innerHTML = `Clicks: ${c}`
})

botao.addEventListener('mouseover', function(e)  {
    let posX = Math.random() * 75
    let posY = Math.random() * 75
    if(botao.style.transitionDuration == 0){
        alert("Selecione a dificuldade!")
    }else{
    botao.style.left = `${posX}vw`
    botao.style.top = `${posY}vh`
    }
    console.log(`X: ${posX} e Y: ${posY}`)
})

botao.addEventListener('mousedown', function() {
    c += 1
    contador.innerHTML = `Clicks: ${c}` 
})