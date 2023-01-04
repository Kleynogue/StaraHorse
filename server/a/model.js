const fs = require('fs')

function post(body, func){
    dato = `insert into ejemplar(ejem_nombre, ejem_num_tatuaje, ejem_pelaje, ejem_sexo, ejem_fecha_nacimiento, ejem_fecha_ingreso, ejem_peso, Ejem_FK_Hacienda) values ('${body.ejem_nombre}', ${body.ejem_num_tatuaje}, '${body.ejem_pelaje}', '${body.ejem_sexo}', '${body.ejem_fecha_nacimiento}', '${body.ejem_fecha_ingreso}', ${body.ejem_peso}, ${body.Ejem_FK_Hacienda});\n`;
    fs.writeFile('./file.txt', dato, {
        flag: 'a'
    }, func);
}

module.exports = {
    post
}