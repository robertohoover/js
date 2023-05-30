//href - Retorna la URL de la página actual
console.log(location.href);

//hostname - Retorna el host de la página actual
console.log(location.hostname);

//pathname
console.log(location.pathname);

//protocol
console.log(location.protocol);  


const cargarDocumento = () => {
    location.assign('https://google.com')
};