const { pool, getColumn } = require('../settings/pg');
const admin = require('../models/admin');
const  utils  = require("../settings/utils");



function index(req, res, next){
    admin.get(pool, req.params, '', (err, datos)=> {
        console.log(req.params.table)
        if(err !=null){
            next(err);
        }else{
            res.json(datos.rows); 
        }        
    });
};

function insert(req, res, next){
    try {
        let columns = utils.stringify(req.body.columns,"");
        let values = utils.stringify(req.body.values,"");
        let body ={
            columns,
            values
        };
        admin.put(pool, req.params, body, (err, datos)=> {
            if(err != null){
                console.log(err);
                next(err);
            }else{
                console.log(datos);
                res.status(204).send();   
            };
            
        })
    } catch (error) {
        console.log(error);
        next(error);
    }

};

function edit(req, res, next){
    getColumn(req.params.table.toLowerCase(), (err, datos)=>{
        if(err != null){
            console.log(err);
            next(err);
        }else{
            try {
                extra = utils.toWhere(utils.getBody(datos.rows[0].column_name, req.params.id));
                admin.get(pool, req.params, extra, (err, datos)=>{
                    if(err != null){
                        console.log(err);
                        next(err);
                    }else{
                        console.log(datos.rows);
                        res.json(datos.rows);
                    }
                });
            } catch (error) {
                console.log(error);
                next(error);    
            }
        }
    });
}

function update(req, res){
    getColumn(req.params.table.toLowerCase(), (err, datos) => {
        if(err != null){
            console.log(err);
            next(err);
        }else{
            try {
                let array = [];
                for (let i = 0; i < req.body.columns.length; i++) {
                    array[i] = utils.getEqual(utils.getBody(req.body.columns[i], req.body.values[i]))
                };
                let set = utils.stringify(array, '');
                extra = utils.toWhere(utils.getBody(datos.rows[0].column_name, req.params.id));
                admin.patch(pool, req.params, set, extra, (err, datos)=> {
                    if(err != null){
                        console.log(err);
                        next(err);
                    }else{
                        console.log(datos);
                        res.status(204).send();
                    }
                })
            } catch (error) {
                console.log(error);
                next(error);
            } 
        }
    })
};

function remove(req, res){
    getColumn(req.params.table.toLowerCase(), (err, datos) => {
        if(err != null){
            console.log(err);
            next(err);
        }else{
            try {
                extra = utils.toWhere(utils.getBody(datos.rows[0].column_name, req.body.id));
                admin.remove(pool, req.params, extra, (err,datos)=> {
                    if(err != null){
                        console.log(err);
                        next(err);
                    }else{
                        console.log(datos);
                        res.status(204).send();
                    }
                })
            } catch (error) {
                console.log(error);
                next(error);
            }
        }
    })
};

module.exports = {
    index,
    insert,
    edit,
    update,
    remove
};