window.addEventListener('mousemove', (event) => {
    console.log(event)
    let cX = event.clientX
    let cY = event.clientY
    let ednaldo = this.document.querySelector('div')
    ednaldo.style.backgroundImage = "url('ednaldo.png')"
    ednaldo.style.position = "absolute"
    ednaldo.style.transform = "translate(-50%, -50%)"
    ednaldo.style.top = `${cY}px`
    ednaldo.style.left = `${cX}px`
})

window.addEventListener('mousedown', (event) => {
    console.log(event)
    let cX = event.clientX
    let cY = event.clientY
    let ednaldo = document.createElement('div')
    ednaldo.style.backgroundImage = "url('ednaldo.png')"
    ednaldo.style.position = "absolute"
    ednaldo.style.transform = "translate(-50%, -50%)"
    ednaldo.style.top = `${cY}px`
    ednaldo.style.left = `${cX}px`
    document.body.appendChild(ednaldo)
})
