window.addEventListener('load', function (e) {
    var msg = document.querySelector('#msg')
    var msg2 = document.querySelector('#msg2')
    var foto = document.querySelector('#foto')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        foto.src = 'imagens/manhã-250.png'
        msg2.innerHTML = 'Bom dia!'
        this.document.body.style.backgroundColor = '#6e6eaf'
    }else if(hora >= 12 && hora < 18) {
        //BOA TARDE
        foto.src = 'imagens/tarde-250.png'
        msg2.innerHTML = 'Boa Tarde!'
        this.document.body.style.backgroundColor = '#9c833d'
    }else {
        //BOA NOITE
        foto.src = 'imagens/noite-250.png'
        msg2.innerHTML = 'Boa noite!'
        this.document.body.style.backgroundColor = '#643968'
    }
})