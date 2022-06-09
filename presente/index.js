const data = new Date();
const bom = document.querySelector('#bom');
let hora = data.getHours();

window.addEventListener('load', function() {
    if (hora > 5 && hora < 12) {
        bom.innerHTML = "Bom Dia, meu bem &#x1F496!"
    } else if (hora >= 12 && hora < 19) {
        bom.innerHTML = "Boa tarde, coração &#x1F497!"
    } else {
        bom.innerHTML = "Boa noite, mindoin &#x1F495!"
    }
})