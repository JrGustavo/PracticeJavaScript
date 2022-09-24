import  {getHeroeById} from '../bases/08-import-exp';



const getHeroeByIdAsync = (id ) => {
    const promesa = new Promise((resolve, reject ) => {

        setTimeout( () =>{

            const p1 = geHeroeById(id);
            if(p1){
                resolve (p1);
            }else {
                reject('Nos e pudo encontrar el heroe');
            }
        }, 2000)

    });

}

getHeroeByIdAsync(1)
    .then(console.log)
    .cath( console.warn);
