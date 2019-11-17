// Server name: gdms-db.postgres.database.azure.com
// Database name: postgres
// Admin name: gdms@gdms-db
// Password: e9CcmBzR&8%4

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries_azure')
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