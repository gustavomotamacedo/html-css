const inicio = document.querySelector('#inicio')
const fim = document.querySelector('#fim')
const passo = document.querySelector('#passos')
const contador = document.querySelector('#contagem')
const contar = document.querySelector('#contar')

contar.addEventListener('mousedown', function (e) {
    let i = parseInt(inicio.value)
    let f = parseInt(fim.value)
    let c = parseInt(passo.value)
    if (inicio.value != '' && fim.value != '' && passo.value != '') {
        contador.innerHTML = ''
        if (i > f) {
            while(i >= f) {
                contador.innerHTML += `${i} `
                i -= c
            }
        }else {
            while(i <= f) {
                contador.innerHTML += `${i} `
                i += c
            }   
        }
    }else {
        contador.innerHTML = 'Preparando a contagem...'
        alert('[ERRO] Imposível contar! Veja se as informações foram preenchidas corretamente!')
    }  
    
})