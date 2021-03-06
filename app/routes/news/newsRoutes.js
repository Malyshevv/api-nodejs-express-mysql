const mysql = require('mysql2')
const {firewall,expressAccessToken} = require('../../../config/accsess')

module.exports = function(app,db) {

    /**SEND QUERY FUNC**/
    function sendQeury(res,pool,query,insertData) {
        pool.execute(query,insertData)
            .then(result =>{
                res.setHeader('Content-Type', 'application/json')
                res.send(result[0])
            })
            .then(() => {
                console.log('pool closed')
            })
            .catch(function (err) {
                res.send(err)
            });
    }

    /**get all posts METHOD - GET (http://localhost:8000/news/) **/
    app.get('/news/', expressAccessToken,firewall, (req,res) => {
        const pool = mysql.createPool(db.configDB).promise();
        const query = "SELECT * FROM news";

        sendQeury(res,pool,query)
    })

    /**get singl posts METHOD - GET (http://localhost:8000/news/ID)**/
    app.get('/news/:id',expressAccessToken,firewall, (req,res) => {
        const filter = `id = ${req.params.id}`
        const pool = mysql.createPool(db.configDB).promise();
        const query = `SELECT * FROM news WHERE ${filter}`;

        sendQeury(res,pool,query)
    })

    /**INSERT posts METHOD - POST (http://localhost:8000/news/ **/
    app.post('/news/', expressAccessToken,firewall,(req,res) => {
        const params = { text: req.body.body, title: req.body.title, description: req.body.description }
        const insertData = Object.values(req.body);
        const columns = [
            'title',
            'description',
            'text'
        ]
        const query = `INSERT INTO news(${columns}) VALUES (?,?,?)`;
        const pool = mysql.createPool(db.configDB).promise();

        sendQeury(res,pool,query,insertData)
    })

    /**UPDATE posts METHOD - PUT (http://localhost:8000/news/ID **/
    app.put('/news/:id', expressAccessToken,firewall,(req,res) => {
        const filter = `id = ${req.params.id}`
        const insertData = Object.values(req.body);
        const params = { title: req.body.title, description: req.body.description, text: req.body.text}
        const columns = [
            'title = ?',
            'description = ?',
            'text = ?'
        ]
        const query = `UPDATE news SET ${columns} WHERE ${filter}`;
        const pool = mysql.createPool(db.configDB).promise();

        sendQeury(res,pool,query,insertData)
    })

    /** DELETE posts METHOD - DELETE (http://localhost:8000/news/ID **/
    app.delete('/news/:id', expressAccessToken,firewall,(req,res) => {
        const filter = `id = ${req.params.id}`
        const query = `DELETE FROM news WHERE ${filter}`;
        const pool = mysql.createPool(db.configDB).promise();

        sendQeury(res,pool,query)
    })
}
