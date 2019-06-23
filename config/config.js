const dotenv = require('dotenv');
dotenv.config();
var os = require("os");
var hostname = os.hostname();
var macbookPro = 'C02WM0D9HTDF';

var database = hostname === macbookPro
? process.env.MONGO_CONNECTION_STRING_LOCAL
: process.env.MONGO_CONNECTION_STRING_REMOTE


module.exports = {database}