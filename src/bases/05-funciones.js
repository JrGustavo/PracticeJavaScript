
//const saludar = function  (nombre ){
//    return `Hola, ${ nombre }`;
//}

const saludar2 =   (nombre ) => {
    return `Hola, ${ nombre }`;
}
const saludar3 = ( nombre ) =>  `Hola, ${nombre} `;
const saludar4 = ( ) =>  `Hola Mundo`;

//console.log(saludar ('Goku'))

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar3());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Paipi1502'
});

const user = getUser();
console.log(user);

const  getUsuarioActivo = (nombre ) => ({
    uid: 'ABCDE!',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Junior');
console.log(usuarioActivo);


