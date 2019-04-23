//rds-agnostic.cfvmqjeugdxx.us-east-2.rds.amazonaws.com
//port: 5432
//AgnosticAdmin
//25u8zYUnNndyKAgNZuFy

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API. Use \'/getjson\' route to return the latest entry in the Postgres database hosted on RDS.' })
})

app.get('/getjson', db.getInfoById)
app.listen(port, () => {
    console.log(`AgnosticAdmin RDS app running on port ${port}.`)
})