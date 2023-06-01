

const eliminarCajas = () =>{  
    
    const padre = document.getElementById('contenedor1');
    const cajitas = padre.querySelector('.caja');
    
    
    if(cajitas){
        
        padre.removeChild(cajitas)
    }

}