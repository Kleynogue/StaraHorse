const { Pool } = require('pg');

const config = {
    user: 'NBD_grupo1',
    host: 'labs-dbservices01.ucab.edu.ve',
    password: '123456',
    database: 'starahorse',
    port: '5432'
};

const pool = new Pool(config);

module.exports.pool = pool;

// pool.query("Select * from lugar", (err, data) =>{
//     let lugar = data.rows;
//     console.log(lugar);
// })