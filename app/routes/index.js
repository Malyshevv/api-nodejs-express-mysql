const newsRouter = require('./news/newsRoutes')
const tokenRoutes = require('./Token/tokenRoutes')

module.exports = function(app,db) {
    newsRouter(app,db)
    tokenRoutes(app,db)
}
