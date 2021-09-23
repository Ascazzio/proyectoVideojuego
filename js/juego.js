function iniciar() {
    var boton = document.getElementById('power');
    boton.addEventListener('click', presionar, false);
}

function presionar() {
    var juego = document.getElementById('juego');
    //juego.style.display = 'flex';
    
    if (juego.style.display == 'flex') {
        

         juego.style.display = 'none';
     } else if (juego.style.display == 'none'){

        juego.style.display = 'flex';      
   } 
    
   
}

window.addEventListener('load', iniciar, false)





