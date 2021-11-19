const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');


const sitemap = require('express-sitemap-html')
const listEndpoints = require("express-list-endpoints");

const db = require('./config/db')

const app = express();
const port = 8000;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))


const pool = mysql.createPool(db.configDB)

pool.end(function(err) {
    if (err) {
        throw Error("Error: " + err.message);
    } else {
        console.log('Mysql coneection is successfully')

        require('./app/routes')(app,db);

        /**Swagger sitemap - all methods */
        app.get('/sitemap', sitemap(app))
        sitemap.swagger('My API', app)
        /* let endPointReq = listEndpoints(app)*/

        app.listen(port, () => {
            console.log('API IS UP - http://localhost:'+port)
        })
    }
});
