const mongoose = require('mongoose');

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

exports.index('/', (req, res) => {
    res.render('login');
});

