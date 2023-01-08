const {pool} = require('../settings/pg');
const reports = require('../models/reports');
const { DataRowMessage } = require('pg-protocol/dist/messages');

function getUsers(req, res, next){
    reports.users(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        };
    });
};

function getStuds_1(req, res, next){
    reports.stud_1(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        };
    });
};

function getStuds_2(req, res, next){
    reports.stud_2(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        };
    });
};

function getStuds_3(req, res, next){
    reports.stud_3(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        };
    });
};

function getHorses(req, res, next){
    reports.horses(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        };
    });
};

function getImplements(req, res, next){
    reports.implements(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        };
    });
};

function getTrainers(){
    reports.trainers(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        }
    })
};

function getJockey(req, res, next){
    reports.jockey(pool, (err, datos) =>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        };
    });
};

function getRestaurants(req, res, next){
    reports.restaurants(pool, (err, datos) =>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        };
    });
};

module.exports = {
    getUsers,
    getStuds_1,
    getStuds_2,
    getStuds_3,
    getHorses,
    getImplements,
    getTrainers,
    getJockey,
    getRestaurants
}