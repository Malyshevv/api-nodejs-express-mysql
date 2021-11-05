const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')

const db = require('./config/db')

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }))

const pool = mysql.createPool(db.configDB)

pool.end(function(err) {
    if (err) {
        throw Error("Error: " + err.message);
    } else { 
        console.log('Mysql coneection is successfully')    
        
        require('./app/routes')(app,db);

        app.listen(port, () => {
            console.log('API IS UP - http://localhost:'+port)
        })
    }    
});
