const { pool, getColumn } = require('../settings/pg');
const admin = require('../models/admin');
const  utils  = require("../settings/utils");



function index(req, res, next){
    admin.get(pool, req.params, '', (err, datos)=> {
        console.log(req.params)
        if(err !=null){
            next(err);
        }else{
            res.json(datos.rows); 
        }        
    });
};

function insert(req, res, next){
    try {
        let columns = utils.stringify(utils.getStructure(req.body).columns,"");
        let values = utils.stringify(utils.getStructure(req.body).values,"");
        let body ={
            columns,
            values
        };
        admin.put(pool, req.params, body, (err, datos)=> {
            if(err != null){
                console.log(err);
                next(err);
            }else{
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
            next(err);
        }else{
            try {
                extra = utils.toWhere(utils.getBody(datos.rows[0].column_name, req.params.id));
                admin.get(pool, req.params, extra, (err, datos)=>{
                    if(err != null){
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

function update(req, res, next){
    getColumn(req.params.table.toLowerCase(), (err, datos) => {
        if(err != null){
            next(err);
        }else{
            try {
                x = utils.getStructure(req.body);
                let array = [];
                for (let i = 0; i < x.columns.length; i++) {
                    if(x.values[i] !== "''"){
                        array.push(utils.getEqual(utils.getBody(x.columns[i], x.values[i])));
                    }
                };
                console.log(array)
                let set = utils.stringify(array, '');
                extra = utils.toWhere(utils.getBody(datos.rows[0].column_name, req.params.id));
                admin.patch(pool, req.params, set, extra, (err, datos)=> {
                    if(err != null){
                        next(err);
                    }else{
                        res.status(204).send();
                    }
                })
            } catch (error) {
                next(error);
            } 
        }
    })
};

function remove(req, res, next){
    getColumn(req.params.table.toLowerCase(), (err, datos) => {
        if(err != null){
            next(err);
        }else{
            try {
                extra = utils.toWhere(utils.getBody(datos.rows[0].column_name, req.params.id));
                admin.remove(pool, req.params, extra, (err,datos)=> {
                    if(err != null){
                        next(err);
                    }else{
                        res.status(204).send();
                    }
                })
            } catch (error) {
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