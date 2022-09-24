//Desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'Soldado'
};

//const { edad, clave, nombre, } = persona;
//
//console.log(nombre);
//console.log(edad);
//console.log(clave);

const useContext = ({   clave, nombre, edad, rango = 'Capitan'} ) => {

    //console.log(usuario)

    return {
        nombreClave: clave,
        anios: edad
        latlang: {
            lat: 14.5436,
            lng: -12.345
        }
    }

}

const {nombreClave, anios, latlng:  {lat, lng   } } = useContext(persona );

console.log(nombreClave, anios);
console.log(lar, lng);



