const findQuery = async (res,pool,query) => {
    var resultFind = await pool.execute(query)
        .then(result =>{
            return result[0]
        })
        .then(() => {
            pool.end();
        })
        .catch(function (err) {
            pool.end();   
            return err;
        }); 
      
}

module.exports = { findQuery };

