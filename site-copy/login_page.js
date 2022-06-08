const rgmInput = document.body.querySelector('input.rgm')
const rgmLabel = document.body.querySelector('label.rgm')
const senhaInput = document.body.querySelector('input.senha')
const senhaLabel = document.body.querySelector('label.senha')
const submitBtn = document.querySelector('.submit')

rgmInput.addEventListener('mousedown', function () {
    rgmLabel.innerHTML = ' '
})

senhaInput.addEventListener('mousedown', function () {
    senhaLabel.innerHTML = ' '
})

submitBtn.addEventListener('mousedown', function () {
    if (rgmInput.value == '' || senhaInput.value == '') {
        alert('Por favor, insira seus dados corretamente!')
    }
})