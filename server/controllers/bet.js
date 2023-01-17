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
                };
            });
        };
    });
};

function type(req, res, next){
    bet.type(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        }
    })
};

function race(req, res, next){
    bet.race(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        }
    })
};

function race_1(req, res, next){
    bet.getMin(pool, req.body.tipo, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            if(datos.rows[0] !== undefined){
                array = [];
                array[0] = datos.rows[0].minus;
                bet.countInsc(pool, req.body.carrera, (err, datos)=>{
                    if(err != null){
                        next(err);
                    }else{
                        if(datos.rows[0] !== undefined){
                            array[1] = datos.rows[0].num;
                            if(!(array[0] <= array[1]) && array[0] !== null){
                                res.status(400).json({error: 'No hay suficientes ejemplares para este tipo de apuesta'});
                            }else{
                                res.status(204).send();
                            }
                        }else{
                            res.status(404).json({error: 'Carrera no existe'})
                        }
                    }
                })
            }else{
                res.status(404).send('Tipo no existe')
            }
        }
    })
}

function horse(req, res, next){
    bet.horse(pool, req.query.id, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        }
    })
};

function insert(req, res, next){
    bet.getType(pool, req.body.tipo, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            if(req.body.monto != null){
                if(datos.rows[0] !== undefined){
                    if(req.body.monto < datos.rows[0].monto){
                        res.status(400).json({error: `Monto menor al requerido: ${datos.rows[0].monto}`});
                    }else{
                        res.status(200).json({});
                    }
                }else{
                    res.status(404).json({error: 'Tipo no existe'})
                }
            }else{
                res.status(404).json({error: 'Monto no definido'});
            }
        }
    });
};

function insert_1(req, res, next){
    tipo = req.body.tipo
    bet.getRestrictions(pool, tipo, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            if(datos.rows[0].req !== undefined){
                if(req.body.ejemplares.length !== datos.rows[0].req){
                    res.status(400).json({error:`Número de ejemplares requeridos: ${datos.rows[0].req}`});
                }else{
                    bet.register(pool, req.body, req.user, (err, datos)=>{
                        if(err != null){
                            next(err);
                        }else{
                            console.log(datos.rows);
                            res.json('Apuesta registrada');
                        }
                    })
                }
            }else{
                    res.status(404).json({err:'Tipo no existe'});
            }
        }
    })
};

module.exports = {
    show,
    type,
    race,
    race_1,
    horse,
    insert,
    insert_1
}