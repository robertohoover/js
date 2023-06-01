

const contenedor = document.getElementById('contenedor1');

contenedor.addEventListener('click', (e) =>{
    console.log('Diste click en contenedor 1');
});

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Diste click en la primera caja');
});