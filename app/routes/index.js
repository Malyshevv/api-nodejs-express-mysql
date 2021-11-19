const newsRoutes = require('./news/newsRoutes')

module.exports = function(app,db) {
    newsRoutes(app,db)
}
