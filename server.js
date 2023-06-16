const mysql = require('./config/connectDB.js')

var express = require('express');
var app = express();

const port = 3000;

app.set('view engine', 'ejs');
// homepage 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// user page 
app.get('/users', async (req, res) => {
    try {
        const users = await mysql.query("select * from user");

        res.render('pages/users', {users: users[0]});
    }

    catch (err) {
        console.log(err);
        res.status(500).render('static/error500')
    }

});

// food page
app.get('/foods', async (req, res) => {
    try {
        const foods = await mysql.query("select * from food");

        res.render('pages/foods', {foods: foods[0]});
    }

    catch (err) {
        console.log(err);
        res.status(500).render('static/error500')
    }
});

app.listen(port, () => {
    console.log(`App listen at localhost:${port}`)
});
