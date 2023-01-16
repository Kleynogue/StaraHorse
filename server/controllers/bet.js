const { pool } = require('../settings/pg');
const bet = require('../models/bet');
const jwt = require('jsonwebtoken');

function show(req, res, next){
    jwt.verify(req.token, 'BD_I', (err, datos)=>{
        if(err !== null){
            next(err);
        }else{
            user = datos.username;
            bet.bets(pool, user, (err, datos)=>{
                if(err != null){
                    console.log(err)
                    next(err);
                }else{
                    res.json(datos.rows);
                }
            })
        }
    })
};

function type(){

};

function race(){

};

function horse(){

};

function insert(){
    bet.horse();
};

function insert_1(){

};

module.exports = {
    show,
    type,
    race,
    horse,
    insert,
    insert_1
}