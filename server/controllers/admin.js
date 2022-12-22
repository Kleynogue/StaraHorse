const { pool, getColumn } = require('../pg');
const admin = require('../models/admin');
const  utils  = require("../settings/utils");



function index(req, res, next){
    admin.get(pool, req.params, '', (err, datos)=> {
        try {
            let tabla = datos.rows
            console.log(req.params.table)
            console.log(tabla);
            res.json(tabla); 
        } catch (error) {
            console.log(error);
            next(error);
        }
        
    });   

};

function insert(req, res){
    let columns = "";
    columns = utils.stringify(req.body.columns,columns);
    let values = "";
    values = utils.stringify(req.body.values, values);
    let body ={
        columns,
        values
    };
    admin.put(pool, req.params, body, (err, datos)=> {
        console.log(datos);
        res.status(204).send();
    })
};

function edit(req, res){
    getColumn(req.params.table.toLowerCase(), (err, datos)=>{
        extra = utils.toWhere(utils.getBody(datos.rows[0].column_name, req.params.id));
        admin.get(pool, req.params, extra, (err, datos)=>{
            console.log(datos.rows);
            res.json(datos.rows);
        });
    });
}

function update(req, res){
    getColumn(req.params.table.toLowerCase(), (err, datos) => {
        let array = [];
        for (let i = 0; i < req.body.columns.length; i++) {
            array[i] = utils.getEqual(utils.getBody(req.body.columns[i], req.body.values[i]))
        };
        let set = utils.stringify(array, '');
        extra = utils.toWhere(utils.getBody(datos.rows[0].column_name, req.params.id));
        admin.patch(pool, req.params, set, extra, (err, datos)=> {
            console.log(datos);
            res.status(204).send();
        })    
    })
};

function remove(req, res){
    getColumn(req.params.table.toLowerCase(), (err, datos) => {
        extra = utils.toWhere(utils.getBody(datos.rows[0].column_name, req.body.id));
        admin.remove(pool, req.params, extra, (err,datos)=> {
            console.log(datos);
            res.status(204).send();
        })
    })
    
};

module.exports = {
    index,
    insert,
    edit,
    update,
    remove
};