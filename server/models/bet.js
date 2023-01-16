function bets(pg, user, func){
    pg.query(`Select Apue_Descripcion Descripcion, Apue_Monto Monto from apuesta where apue_fk_usuario = (select usua_ID from usuario where usua_nombre = '${user}');`, func);
}

function horse(){

};

module.exports = {
    bets,
    horse
}