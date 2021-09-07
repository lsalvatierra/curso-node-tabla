
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require("colors");
const argv = require('./config/yargs');
console.clear();

//console.log(process.argv);
console.log(argv);
console.log('base:'+argv.base);


const base = argv.base;
// let salida = '';
// for(i=1; i <= 10; i++){
//     salida += `${base} x ${i} = ${base * i}\n`;
    
// } 

// fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
//     if(err) throw err;
//     console.log(`tabla del ${base} creado`);
// })

// fs.writeFileSync(`tabla-${base}.txt`, salida);
// console.log(`tabla del ${base} creado`);
//Llamado al método clásico.
//crearArchivo(base);
// const [,,arg3 = 'base=5'] = process.argv
// const [,base = 5] = arg3.split('=');
// console.log(base);
//Llamando a método por promesa o async
crearArchivo(base, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow+' creado'))
    .catch(err => console.log(err));
    