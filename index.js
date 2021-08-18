const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');
const bcrypt = require('bcryptjs');
const expressSession = require('express-session');

const app = express();

let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync('bacon', salt);

app.use(expressSession({
    secret: 'whatever',
    saveUninitialized: true,
    resave: true
}));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

const urlencodedParser = express.urlencoded({extended: false});

const checkAuth = (req, res, next) => {
    if(req.session.user && req.session.user.isAuthenticated)
    {
        next();
    }
    else
    {
        res.redirect('/');
    }
};


app.get('/', routes.index);
app.post()

app.listen(3000);

//AHHHHHHHHHHHHHHHHHHHHHH