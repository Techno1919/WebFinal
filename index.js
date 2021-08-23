const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

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
app.get('/userpage/:id', routes.userpage);
app.post('/userpage/:id', urlencodedParser, routes.update);
app.post('/login', urlencodedParser, routes.login);
app.get('/create', routes.createAccount);
app.post('/create', urlencodedParser, routes.create);
app.get('/logout', routes.logout);

app.listen(3000);

//AHHHHHHHHHHHHHHHHHHHHHH