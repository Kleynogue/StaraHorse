const model = require('./model');

function insert(req, res, next){
    try {
        model.post(req.body, (err, datos) =>{
            if(err != null){
                console.log(err);
                next(err);
            } else{
                console.log(datos);
                res.redirect('http://192.168.0.100/')
            }
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    insert
}