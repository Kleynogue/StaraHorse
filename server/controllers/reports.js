const {pool} = require('../settings/pg');
const reports = require('../models/reports');

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

function getTrainers(req, res, next){
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

function getWinners(req, res, next){
    reports.winners(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        }
    })
}

function getWinners_1(req, res, next){
    reports.winners_1(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows)
        }
    })

}

function getHistory(req, res, next){
    reports.history(pool, req.query.name, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        }
    })
}

function jockeyStat(req, res, next){
    reports.statJockey(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        }
    })
}

function horseStat(req, res, next){
    reports.statHorse(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows)
        }
    })
}

function mixStat(req, res, next){
    reports.statMix(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows)
        }
    })
}

function betTotal_1(req, res, next){
    reports.totalBet_1(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        }
    })
}

function betTotal_2(req, res, next){
    reports.totalBet_2(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        }
    })
}

function betTotal_3(req, res, next){
    reports.totalBet_3(pool, (err, datos)=>{
        if(err != null){
            next(err);
        }else{
            res.json(datos.rows);
        }
    })
}

function ticketTotal(req, res, next){
    reports.totalTicket(pool, (err, datos)=>{
        if(err != null){
            next(err)
        }else{
            res.json(datos.rows);
        }
    })
}

function avgImp(req, res, next){
    reports.avgImp(pool, (err, datos)=>{
        if(err != null){
            next(err)
        }else{
            res.json(datos.rows)
        }
    })
}

function avgImp_1(req, res, next){
    reports.avgImp_1(pool, (err, datos)=>{
        if(err != null){
            next(err)
        }else{
            res.json(datos.rows)
        }
    })
}

function frequency(req, res, next){
    reports.frequency(pool, (err, datos)=>{
        if(err != null){
            next(err)
        }else{
            res.json(datos.rows)
        }
    })
}

function weight(req, res, next){
    reports.weight(pool, (err, datos)=>{
        if(err != null){
            next(err)
        }else{
            res.json(datos.rows)
        }
    })
}

function avgHorse_1(req, res, next){
    reports.avgHorse_1(pool, (err, datos)=>{
        if(err != null){
            next(err)
        }else{
            res.json(datos.rows);
        }
    })
}

function avgHorse_2(req, res, next){
    reports.avgHorse_2(pool, (err, datos)=>{
        if(err != null){
            next(err)
        }else{
            res.json(datos.rows);
        }
    })
}

function parents(req, res, next){
    reports.parents(pool, (err, datos)=>{
        if(err != null){
            next(err)
        }else{
            res.json(datos.rows)
        }
    })
}

module.exports = {
    getUsers,
    getStuds_1,
    getStuds_2,
    getStuds_3,
    getHorses,
    getImplements,
    getTrainers,
    getJockey,
    getRestaurants,
    getWinners,
    getWinners_1,
    getHistory,
    jockeyStat,
    horseStat,
    mixStat,
    betTotal_1,
    betTotal_2,
    betTotal_3,
    ticketTotal,
    avgImp,
    avgImp_1,
    frequency,
    weight,
    avgHorse_1,
    avgHorse_2,
    parents
}