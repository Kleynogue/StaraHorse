function bets(pg, user, func){
    pg.query(`Select Apue_Descripcion Descripcion, Apue_Monto Monto, Apue_ID from apuesta where apue_fk_usuario = (select usua_ID from usuario where usua_nombre = '${user}');`, func);
};

function type(pg, func){
    pg.query("Select tip_apu_ID ID, tip_apu_nombre tipo, tip_apu_descripcion descripcion from tipo_apuesta", func);
};

function race(pg, func){
    pg.query("Select carr_nombre carrera, carr_ID ID from carrera where carr_ID not in (select carr_id from carrera, inscripcion, resultado where carr_id = insc_FK_carrera and insc_ID = resu_fk_inscripcion)", func)
};

function horse(pg, id, func){
    pg.query(`Select Ejem_Nombre Ejemplar, Insc_ID ID from carrera, inscripcion, eje_ent, ejemplar where carr_id = insc_FK_carrera and insc_FK_ejemplar = eje_ent_ID and eje_ent_FK_Ejemplar = ejem_ID and carr_ID = ${id}`, func);
};

function getType(pg, id, func){
    pg.query(`Select tip_apu_min_apuesta Monto from tipo_apuesta where tip_apu_ID = ${id}`, func);
};

function getRestrictions(pg, type, func){
    pg.query(`Select tip_apu_max_ejemplares req from tipo_apuesta where tip_apu_ID = ${type}`, func);
};

function getMin(pg, type, func){
    pg.query(`Select tip_apu_min_ejemplares_carr minus from tipo_apuesta where tip_apu_id = ${type}`, func);
};

function countInsc(pg, carr, func){
    pg.query(`Select count(*) num from carrera, inscripcion where insc_fk_carrera = carr_Id and carr_ID = ${carr}`, func);
};

async function register(pg, body, user, func){
    console.log(body)
    try {      
        await pg.query(`insert into apuesta(apue_descripcion, apue_monto, apue_fecha, apue_FK_Tipo_apuesta, apue_FK_Usuario) values ('${body.descripcion}', ${body.monto}, (select Now()), ${body.tipo}, (select usua_id from usuario where usua_nombre = '${user}'))`);
        pg.query(`select max(apue_id) apuesta from apuesta`, async (err, datos)=>{
            if(err != null){
                func(err, null);
            }else{
                if(datos.rows[0] !== undefined){
                    await body.ejemplares.forEach(element => {                        
                        pg.query(`insert into detalle_apuesta(det_apu_posicion, det_apu_orden, det_apu_fK_inscripcion, det_apu_fk_apuesta) values (${element.posicion}, ${element.orden}, ${element.id}, ${datos.rows[0].apuesta})`)

                    });
                    func(null, 'Apuesta realizada');                      
                }else{
                    func(new Error('Tabla vacía'), null);
                }
            }
        })     
    } catch (error) {
        func(error, null);
    }


}

module.exports = {
    bets,
    type,
    race,
    horse,
    getType,
    getRestrictions,
    getMin,
    countInsc,
    register
}