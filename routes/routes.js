const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://MStewart:Mancer16@cluster0.acfi9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'Connection Error'));
mdb.once('open', callback => {});

let loginSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
    answer1 : String,
    answer2 : String,
    answer3 : String
});

let Login = mongoose.model('Login_Collection', loginSchema);
let salt = bcrypt.genSaltSync(10);


exports.index((req, res) => {
    res.render('login');
});

exports.login((req, res) => {
    const usernameQuery = Login.where({username: req.body.username});
    if(!(usernameQuery == null))
    {
        const username = Login.find(usernameQuery, (err, login) => {
            if(err) return console.error(err);
        });
        const passwordQuery = Login.where({password: req.body.password});
        if(!(passwordQuery == null))
        {
            const password = Login.find(passwordQuery, (err, login) => {
                if(err) return console.error(err);
            });
            const hashedPassword = bcrypt.hashSync(password, salt);
            const compared = bcrypt.compareSync(password, hashedPassword);
            req.session.user = {
                isAuthenticated: true,
                username: req.body.username
            };
            res.redirect('/userpage');
        }
        else
        {
            res.redirect('/');
        }
    }
    
})