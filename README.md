# General Dynamics Vendor Agnostic Cloud App Backend

ASU Capstone Fall 2019


## Deployment
###### BACK END
1. Clone this repo
2. Install node environment
```
npm install
```
3. Start node environment
```
node index.js
```

Current Database Host:
```
    user: 'AgnosticAdmin',
    host: 'rds-agnostic.cfvmqjeugdxx.us-east-2.rds.amazonaws.com',
    database: 'rds_agnostic',
    password: '25u8zYUnNndyKAgNZuFy',
    port: 5432
```

###### FRONT END
1. Connect to Express backend using EC2 endpoint (see infrastructure team)
2. Go to default homepage of backend to see GET/POST request info.
```
localhost:3000/getrff
...<more to be added>...
```

## Built With
* [MongoDB](https://www.mongodb.com/) - Database
* [Express.js](https://expressjs.com/) - Backend
* [React.js](https://reactjs.org/) - Frontend
* [Node.js](https://nodejs.org/en/) - Environment
* [AWS](https://aws.amazon.com/) - Cloud Hosting
* [Azure](https://azure.microsoft.com/en-us/) - Cloud Hosting


## Contributors

* **Dale Kim** - [Dale Kim](https://github.com/dale-kim)

<!-- Template for README.md -->
<!-- https://gist.github.com/PurpleBooth/109311bb0361f32d87a2 -->