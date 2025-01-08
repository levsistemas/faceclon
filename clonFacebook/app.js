let icons = document.querySelector('i')
let pestanas = document.querySelectorAll('.pestañascontenido')



pestanas.forEach(pestana =>{

    pestana.addEventListener('click' , function seleccionar(){

        if(pestana){
            pestana.classList.add('pestaña_select')
            icons.style.color =  'rgb(21, 115, 255)'
        }
        
        


    })

   
})




