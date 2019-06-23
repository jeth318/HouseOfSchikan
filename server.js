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
    err ? console.log('Failed to connect to database. Make sure you have set up your environtment variables with correct mongo URL: ', err)
        : console.log('Connected to database => ' + db)
});

console.log(process.env);
const app = express();

// Port number
const port = process.env.PORT || 8080;

//Cors Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname,'ang-src/dist/roomies-v2')));

// Body Parser Middleware
app.use(bodyParser.json());

// Api Routes
const routes = require('./api-routes');
app.use('/', routes);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'ang-src/dist/roomies-v2/index.html'));
});


app.set('port', port);

// Start server localhost
app.listen(port,(err)=>{
    err ? console.log('Failed to start server: ', err) 
        : console.log('Server started on port => '+port);
});