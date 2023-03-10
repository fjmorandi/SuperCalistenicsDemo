var express = require('express');
var router = require('./router');
var app = express();
var path = require("path")
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
    res.status(404).render('page404');
});

/* definindo ao express onde estarão os VIEWS */
app.set('views', "./views")
app.set('view engine', 'ejs')

module.exports = app;
