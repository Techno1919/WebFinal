const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);


app.listen(3000);