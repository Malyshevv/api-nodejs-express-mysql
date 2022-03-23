const mysql = require('mysql2')
const { sendQeury } = require('../../utils/sendQuery');
const { firewall, accessTokens } = require('../../../config/accsess')

module.exports = function(app,db) {

    app.get('/token/login=:login&password=:password', (req,res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed

        const filterData = req.params
        
        if(filterData.login == 'admin' && filterData.password == '123456') {
            res.send(accessTokens[Math.floor(Math.random() * accessTokens.length)])
        } else {
            res.send('Error get token')
        }
        

    })
}
