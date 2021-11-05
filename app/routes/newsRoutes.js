const mysql = require('mysql2')

module.exports = function(app,db) {

    function sendQeury(res,pool,query,insertData) {
        pool.execute(query,insertData)
            .then(result =>{ 
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
    app.get('/news/', (req,res) => {
        const pool = mysql.createPool(db.configDB).promise();
        const query = "SELECT * FROM news";

        sendQeury(res,pool,query)
    })

    /**get singl posts METHOD - GET (http://localhost:8000/news/ID)**/
    app.get('/news/:id', (req,res) => {
        const filter = `id = ${req.params.id}`
        const pool = mysql.createPool(db.configDB).promise();
        const query = `SELECT * FROM news WHERE ${filter}`;

        sendQeury(res,pool,query)
    })

    /**INSERT posts METHOD - POST (http://localhost:8000/news/ **/
    app.post('/news/', (req,res) => {
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
    app.put('/news/:id', (req,res) => {
        const filter = `id = ${req.params.id}`
        const insertData = Object.values(req.body); 
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
    app.delete('/news/:id', (req,res) => {
        const filter = `id = ${req.params.id}`
        const query = `DELETE FROM news WHERE ${filter}`;
        const pool = mysql.createPool(db.configDB).promise();
        
        sendQeury(res,pool,query)
    })
}