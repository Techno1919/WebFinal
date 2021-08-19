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

let personInfoSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
    answer1 : String,
    answer2 : String,
    answer3 : String
});

let PersonInfo = mongoose.model('Login_Collection', personInfoSchema);
let salt = bcrypt.genSaltSync(10);

exports.userpage = (req, res) => {
    res.render('userpage');
}

exports.index = (req, res) => {
    res.render('index');
};

exports.login = (req, res) => {
    const usernameQuery = PersonInfo.where({username: req.body.username});
    if(!(usernameQuery == null))
    {
        const username = PersonInfo.find(usernameQuery, (err, login) => {
            if(err) return console.error(err);
        });
        const passwordQuery = PersonInfo.where({password: req.body.password});
        if(!(passwordQuery == null))
        {
            const password = PersonInfo.find(passwordQuery, (err, login) => {
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
    
};

exports.createAccount = (req, res) => {
    res.render('create');
}

exports.create = (req, res) => {
    let person = new PersonInfo({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        age: req.body.age,
        answer1 : req.body.question1,
        answer2 : req.body.question2,
        answer3 : req.body.question3
    });

    person.save((err, person) => {
        if(err) return console.error(err);
        console.log('Account added');
    });

    res.render('userpage', {
        person
    });
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if(err) 
        {
            console.log(err);
        }
        else
        {
            res.redirect('/');
        }
    })
}