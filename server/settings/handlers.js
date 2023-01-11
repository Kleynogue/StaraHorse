const jwt = require('jsonwebtoken');

function adminRoutes(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof (bearerHeader) !== 'undefined'){
        const bearerToken = bearerHeader;
        jwt.verify(bearerToken, "BD_I", (err, datos)=>{
            if(err !== null){
                console.log('a')
                res.sendStatus(403);
            }else{
                if(datos.role === "Administrador"){
                    console.log('b')
                    next();
                }else{
                    console.log('c')
                    res.sendStatus(403);
                }
            }
        })
        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports = {
    adminRoutes
}