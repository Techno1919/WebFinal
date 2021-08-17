const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');
const bcrypt = require('bcryptjs');
const app = express();

let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync('bacon', salt);

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);


app.listen(3000);