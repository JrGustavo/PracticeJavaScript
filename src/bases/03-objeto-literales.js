
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Cali',
        zip: 12345678
        lat: 14.23456
        lng: 46.78562
    }

};

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2)

