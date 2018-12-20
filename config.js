const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

var config = {
	SERVER_PORT: 5006,
	ROOT: __dirname,
};

if( process.env.NODE_ENV == 'production' ){
}

module.exports = config;
