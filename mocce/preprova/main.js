const valor1 = document.body.querySelector('input#valor1')
const valor2 = document.body.querySelector('input#valor2')
const butaum = document.body.querySelector('button#seuBotao')
var c = 0

butaum.addEventListener('mousedown', function (e) {
    let v1 = parseFloat(valor1.value)
    let v2 = parseFloat(valor2.value)
    let soma = v1 + v2
    let somaMaior
    if (c == 0) {
        somaMaior = soma
        c++
    } else {
        if (soma > somaMaior) {
            somaMaior = soma
        }
    }
    console.log(soma + ' ' + somaMaior)
})

/*function saas() {
    let v1 = parseFloat(valor1.value)
    let v2 = parseFloat(valor2.value)
    let soma = v1 + v2
    console.log(soma)
}*/