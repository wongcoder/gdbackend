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

const getRffLatLon = (request, response) => {
    pool.query('select * from rff', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getRffLatLon,
}