//rds-agnostic.cfvmqjeugdxx.us-east-2.rds.amazonaws.com
//port: 5432
//AgnosticAdmin
//25u8zYUnNndyKAgNZuFy

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'AgnosticAdmin',
    host: 'rds-agnostic.cfvmqjeugdxx.us-east-2.rds.amazonaws.com',
    database: 'rds_agnostic',
    password: '25u8zYUnNndyKAgNZuFy',
    port: 5432,
})

const getInfoById = (request, response) => {
    pool.query('select jsonstring from jsontable order by jsonid desc limit 1', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0])
    })
}

module.exports = {
    getInfoById
}