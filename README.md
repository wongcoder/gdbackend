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
    AWS(RDS), Azure.
```

###### FRONT END
1. Connect to Express backend using EC2 endpoint (see infrastructure team)
2. Go to default homepage of backend to see GET/POST request info.

## GET:
```
/getrff    -- Returns all RFF rows and columns
/getcaller -- Returns all Caller rows and columns
```

## POST:
```
/updatecaller
>> Updates the lat/lon columns in a Caller row based on the mmsi_id. 
>> Example POST body: {"lat":"3","lon":"4", "mmsi_id":"338432400"}

/newcaller
>> Adds a new Caller row.
>> Example POST body: 
    {
    "time_stamp":"2019-10-19 02:56:20.040",
    "mmsi_id":"123456789",
    "num_people":10,
    "vessel_info":"Surrounded by sharks",
    "rff_1": "Vermillion Bay",
    "rff_theta_1":"154.67",
    "rff_2": "Creole",
    "rff_theta_2":"11.94"
    }

/deletecaller
>> Deletes a Caller row based on call_id. 
>> For debugging purposes so the database is not overflowed.
>> Example POST body: { "call_id": 5 }
...<more to be added>...
```

## Built With
* [PostgreSQL](https://www.postgresql.org/) - Database
* [Express.js](https://expressjs.com/) - Backend
* [React.js](https://reactjs.org/) - Frontend
* [Node.js](https://nodejs.org/en/) - Environment
* [AWS](https://aws.amazon.com/) - Cloud Hosting
* [Azure](https://azure.microsoft.com/en-us/) - Cloud Hosting


## Contributors

* **Dale Kim** - [Dale Kim](https://github.com/dale-kim)

<!-- Template for README.md -->
<!-- https://gist.github.com/PurpleBooth/109311bb0361f32d87a2 -->