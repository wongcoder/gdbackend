const Pool = require('pg').Pool
const pool = new Pool({
    user: 'AgnosticAdmin',
    host: 'rds-agnostic.cfvmqjeugdxx.us-east-2.rds.amazonaws.com',
    database: 'rds_agnostic',
    password: '25u8zYUnNndyKAgNZuFy',
    port: 5432,
})

const getRff = (request, response) => {
    pool.query('select * from rff', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCaller = (request, response) => {
    pool.query('select * from caller', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateCaller = (req, res) => {
    const body = req.body
    pool.query('update caller set lat = $1, lon = $2 where mmsi_id = $3', [body["lat"], body["lon"], body["mmsi_id"]], (error, results)=> {
        if (error) throw error
    })
    res.status(201).send('Successfully added update caller')
}


const newCaller = (req, res) => {
    const body = req.body
    pool.query('insert into caller(time_stamp, mmsi_id, num_people, vessel_info, rff_1, rff_theta_1, rff_2, rff_theta_2) values ($1, $2, $3, $4, $5, $6, $7, $8)', [body["time_stamp"], body["mmsi_id"], body["num_people"], body["vessel_info"], body["rff_1"], body["rff_theta_1"], body["rff_2"], body["rff_theta_2"]], (error, results)=> {
        if (error) throw error
    })
    res.status(201).send('Successfully added new caller')
}

// const clearAllData = (request, response) => {
//     pool.query('delete from jsontable', (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows[0])
//     })
// }

// const resetJsonTableIDSerializer = (request, response) => {
//     pool.query('alter sequence jsontest_jsontest_id_seq restart with 1', (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows[0])
//     })
// }

module.exports = {
    getRff,
    getCaller,
    updateCaller,
    newCaller,
}