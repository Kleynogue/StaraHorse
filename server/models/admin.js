
function get(pg, params, extra, func){
    pg.query(`Select * from ${params.table} ${extra}`, func);
};

function put(pg, params, body, func){
    pg.query(`Insert into ${params.table} (${body.columns}) values (${body.values})`, func);
};

function remove(pg, params, cond, func){
    console.log(`Delete from ${params.table} ${cond}`)
    pg.query(`Delete from ${params.table} ${cond}`, func);
};

function patch(pg, params, set, extra, func){
    pg.query(`update ${params.table} set ${set} ${extra}`, func);
};

module.exports = {
    get,
    put,
    remove,
    patch
};