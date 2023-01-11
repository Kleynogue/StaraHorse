const { Pool } = require('pg');

const config = {
    user: 'NBD_grupo1',
    host: 'labs-dbservices01.ucab.edu.ve',
    password: '123456',
    database: 'starahorse',
    port: '5432'
};

const pool = new Pool(config);

async function getColumn(table, func){
    await pool.query(`select column_name from INFORMATION_SCHEMA.COLUMNS where table_name = '${table}' AND column_name like '%id%' limit 1`, func);
}

  module.exports = {
    pool,
    getColumn
  }