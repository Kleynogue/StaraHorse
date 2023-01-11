function getUser(pg, user, func){
    pg.query(`Select usua_nombre usuario, usua_contrasena pass from usuario where usua_nombre = ${user}`, func);
};

module.exports = {
    getUser
}