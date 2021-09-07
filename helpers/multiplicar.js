const { rejects } = require('assert');
const fs = require('fs');
const colors = require("colors");

/*
Método clásico
const crearArchivo = (base  = 5) =>{
    let salida = '';
    for(i=1; i <= 10; i++){
        salida += `${base} x ${i} = ${base * i}\n`;        
    } 
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla del ${base}.txt creado`);

}
*/
/*
Promesa
const crearArchivo = (base  = 5) =>{
    return new Promise((resolve, reject) => {
        let salida = '';
        for(i=1; i <= 10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;        
        } 
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla del ${base} creado`);
    })    
}
*/

const crearArchivo = async(base  = 5, listar = false, hasta = 10) =>{
    try{
        let salida, consola = '';
        for(i=1; i <= hasta; i++){
            salida += `${base} ${'x'.red} ${i} ${'='.blue} ${base * i}\n`;        
            consola += `${base} X ${i} = ${base * i}\n`;         
        } 
        if(listar) {
            console.log(salida);
        }        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        return `tabla del ${base}`;

    }catch(err){
        throw err;
    }
}



module.exports = {
    crearArchivo
}