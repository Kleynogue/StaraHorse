const {pool} = require ("../settings/pg");
const login = require ("../models/login");
const jwt = require ("jsonwebtoken");

function auth(req, res, next){
    login.getUser(pool, `'${req.body.user}'`, (err, datos)=>{
        console.log(req.body)
        if(err != null){
            next(err);
        }else{
            if(datos.rows[0] !== undefined){
                    if(req.body.password === datos.rows[0].pass){
                        user = {
                            username: req.body.user,
                            role: datos.rows[0].rol
                        };
                        let token = jwt.sign(user, "BD_I");
                        res.header('authorization', token).json({token: token});
                    }else{
                        res.status(404).send('Contraseña incorrecta');
                    }
            }else{
                res.status(404).send('Usuario no existe');
            }
        }
    });
};

module.exports = {
    auth
}