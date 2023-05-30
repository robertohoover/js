//Forma 1 - Mediante palabras export default

// export default () => {
//     return {
//         nombre: 'Roberto',
//         correo: 'correo@correo.com',
//     };
// };


//Forma 2 - Final del socumento

const obtenerUsuario = () => {
    return {
        nombre: 'Roberto',
        correo: 'correo@correo.com',
    };
};

export default obtenerUsuario;