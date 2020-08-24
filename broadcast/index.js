/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const engines = require('consolidate');
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8001";
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
// aapp.set('views', __dirname + '/views');
// app.engine('html', engines.hbs);
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
// app.set("view engine", "pug");
app.use(express.static('public'));
app.use('/static', express.static('public'));
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});