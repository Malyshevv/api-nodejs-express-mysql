const sendQeury = (res,pool,query,insertData) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    pool.execute(query,insertData)
        .then(result =>{
            res.send(result[0])
        })
        .then((res) => {
            pool.end()   
        })
        .catch(function (err) {
            res.send(err)
            pool.end()   
        }); 
}

module.exports = { sendQeury };

