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

// enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API. Use \'/getrff\' route to return a json list of all rff\'s and their associated lat/lon values.' })
})


app.get('/getrff', db.getRff)
app.get('/getcaller', db.getCaller)
app.post('/newcaller', db.newCaller)
app.post('/updatecaller', db.updateCaller)
app.post('/deletecaller', db.deleteCaller)

app.listen(port, () => {
    console.log(`AgnosticAdmin RDS app running on port ${port}.`)
})