// console.log(`La ventana de tu navegador mide ${window.innerWidth}px de ancho`)
// console.log(`La ventana de tu navegador mide ${window.innerHeight}px de ancho`)


let ventana;

const abrirVentana = () =>{
     ventana =window.open('', 'Mi nueva ventana', 'width=500, height=500');
     ventana.document.write('<h1>Estamos escribiendo</h1>')
}

const cerrarVentana = () =>{
    ventana.close();
}


console.log('Ancho de la pantall', window.screen.width);
console.log('Ancho de la pantall', window.screen.height);