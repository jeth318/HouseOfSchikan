const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const passport      = require('passport');
const mongoose      = require('mongoose');
const db            = require('./config/config').database;

// Promise
mongoose.Promise = global.Promise;

// Connect To Database
mongoose.connect(db, {useMongoClient: true, reconnectTries: 500, reconnectInterval: 2500}, (err) => {
    err ? console.log('Failed to connect to database '+db+': ', err)
        : console.log('Connected to database => ' + db)
});

const app = express();

// Port number
const port = process.env.PORT || 8080;

//Cors Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Api Routes
const routes = require('./routes');
app.use('/', routes);

// Index Route
app.get('/',(req,res)=>{
    res.send('<h1>Invalid Endpoint</h1>');
});

app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.set('port', port);

// Start server localhost
app.listen(port,(err)=>{
    err ? console.log('Failed to start server: ', err) 
        : console.log('Server started on port => '+port);
});