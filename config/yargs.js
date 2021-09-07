const argv = require('yargs').option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base a multiplicar'
}).option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    demandOption: true,
    describe: 'Lista la tabla de multiplicar'
}).option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta que número se va multiplicar'
}).check((argv, options) =>{
    if(isNaN(argv.b)){
       throw 'la base tiene que ser un número';
    } 
    return true;                               
})
.argv;

module.exports = argv;