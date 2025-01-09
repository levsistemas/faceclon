const ICONS = document.querySelector('i')
const PESTANAS = document.querySelectorAll('.pestanascontenido')

PESTANAS.forEach(pestana => {
    pestana.addEventListener('click', function seleccionar() {
        PESTANAS.forEach(objeto => {
            if (objeto.classList.contains('pestana_select') == true) {
                objeto.classList.remove('pestana_select')
            }
            ICONS.style.color = 'rgb(21, 115, 255)'
        })
        if (pestana.classList.contains('pestana_select') == false) {
            pestana.classList.add('pestana_select')
        }
    })
})