
const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja')


boton1.addEventListener('click', (e) =>{
    primeraCaja.classList.toggle('activa')
})


/*
    Agregamos el evento a multiples elementos
    Podemos agregar el evento a multiples elementos recorriendo mediante un ciclo.
    Nota: Etsa no es la forma mas optima, en la proxima clase veremos una mejor forma
*/

const todasLasCajas = document.querySelectorAll('.caja');

console.log(todasLasCajas)

todasLasCajas.forEach((caja) =>{
    caja.addEventListener('click', (e) =>{
        console.log(`Haz hecho click en la ${e.target.innerHTML}`)
    })
})

// boton1.addEventListener('click', () =>{
//     const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
//     let tamano = 24;
//     console.log(ultimaCaja)

//     ultimaCaja.style.background = "#000";
//     ultimaCaja.style.color = "#FFF";

//     ultimaCaja.style.fontSize = "50px";
// });


