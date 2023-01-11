function getUser(pg, user, func){
    pg.query(`Select usua_nombre usuario, usua_contrasena pass, rol_nombre rol from usuario, rol where usua_nombre = ${user} AND rol_ID = usua_FK_rol`, func);
};

module.exports = {
    getUser
}