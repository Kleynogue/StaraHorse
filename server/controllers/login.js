const {pool} = require ("../settings/pg");
const login = require ("../models/login");

function auth(req, res, next){
    login.getUser(pool, `'${req.body.user}'`, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            if(req.body.user === datos.rows[0].usuario){
                console.log('aa')
                if(req.body.password === datos.rows[0].pass){
                    res.status(200).send('a');
                }else{
                    res.status(200).send('b');
                }
            }else{
                res.status(404).send();
            }
        }
    });
};

module.exports = {
    auth
}