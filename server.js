/*MAIN*/
const express = require('express')
const path = require("path");
const expressHbs = require('express-handlebars')
const hbs = require("hbs");
/* LOGGER */
const pino = require("pino")("./logs/pino-logger.log");
const expressPino = require("express-pino-logger")({logger: pino});
/* MYSQL */
const mysql = require('mysql2');
const db = require('./config/db');
/* MAIL */
const nodemailer = require('nodemailer');
/* DOC */
const sitemap = require('./app/swagger/express-sitemap-html')
const { swDocument } = require('./config/swagger/openapi')
/* OTHER */
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

/* App */
const app = express();
const port = process.env.PORT || 8080;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

app.engine(
    'hbs',
    expressHbs.engine({
        layoutsDir: 'views/layouts',
        defaultLayout: 'layout',
        extname: 'hbs',
    })
)

/* Logger */
app.use(expressPino);

/*App start*/
if(!mysql.createConnection(db.configDB)) {
    throw Error("Error: ");
} else {
    require('./app/routes')(app,db,sitemap);

    sitemap.swagger(swDocument, app);

    /* template dir*/
    app.set("views", path.join(__dirname, "views"));
    hbs.registerPartials(__dirname + '/views/partials')
    app.set("view engine", "hbs");
    app.use(express.static(path.join(__dirname, "public")));

    /* route template*/
    app.get("/", (req, res) => {
        res.render("index.hbs", { title: "Home" });
    });
    app.get('*', function(req, res){
        res.render("404.hbs", { title: "Not Found" });
    });

    app.listen(port, () => {
        console.log('API IS UP - http://localhost:'+port);
    });
}
