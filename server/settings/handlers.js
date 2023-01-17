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

function validateBet(req, res, next){
    const accessToken = req.headers['authorization'];
    if(accessToken !== null){
        jwt.verify(accessToken, 'BD_I', (err, user)=>{
            if(err !== null){
                res.status(401).send('No autorizado');
            }else{
                if(user.role !== 'Jinete'){
                    req.token = accessToken;
                    req.user = user.username;
                    next();    
                }else{
                    res.status(403).send({error: 'Los jinetes no tienen permitido apostar'});
                }
                
            }
        })
    }
}

module.exports = {
    adminRoutes,
    validateBet
}