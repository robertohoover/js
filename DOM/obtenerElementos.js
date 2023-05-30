// const contenedor1 = document.getElementById('contenedor1');
// console.log(contenedor1);

// console.log(contenedor1.children)


// const primeraCaja = document.querySelector('.caja');
// console.log(primeraCaja.innerHTML = "<h3>Elemento 1</h3>");
// primeraCaja.style.background = 'red'

// const segundaFila = document.querySelector('#contenedor2 .caja');
// segundaFila.style.background = '#000';
// segundaFila.style.color = '#FFF';
// segundaFila.style.textTransform = 'uppercase'


const agregarCaja = () => {

   /*
    Creamos elemento
    createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
   */
   const nuevaCaja = document.createElement('div');

   /*
    2.- Agregamos texto y atributos
   */
   nuevaCaja.innerText = 'Nueva Caja';
   nuevaCaja.setAttribute('class', ' caja activa');

   /*
    3.- Agregamos el elemento al DOM
   */
   const contenedor = document.getElementById('contenedor1');

//    contenedor.appendChild(nuevaCaja);

    /*
        .insertAdjancentElement() - Nos permite agregar un alemanto 

        Valores:
        afterbegin- como primer elemnto
        beforebegin -antes del elemento padre
        beforeenf . como ultimo elemento
        afterend - despues del elemento padre
    */

        // contenedor.insertAdjacentElement('afterbegin', nuevaCaja);

        //.replaceWidth() - NOs permite reemlpazar el elemento por otro

        document.querySelector('#contenedor1  .caja').replaceWith(nuevaCaja);

};