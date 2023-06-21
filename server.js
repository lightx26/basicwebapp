const mysql = require('./app/config/connectDB.js')

var express = require('express');
var app = express();

const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));
app.use('/assets', express.static(path.join(__dirname, 'app', 'views', 'assets')));
// homepage 
app.get('/', function(req, res) {
    res.render('pages/index');
});


app.use('/dishes', require('./app/routes/dishes.js'));

// food page
// app.get('/foods', async (req, res) => {
//     try {
//         const foods = await mysql.query("select * from food");

//         res.render('pages/foods', {foods: foods[0]});
//     }

//     catch (err) {
//         console.log(err);
//         res.status(500).render('static/error500')
//     }
// });

app.listen(port, () => {
    console.log(`App listen at localhost:${port}`)
});
