const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routes = require('./routes')
const empRoutes = require('./admin/routes')


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/api', routes)
app.use('/api/admin', empRoutes)

module.exports = app
