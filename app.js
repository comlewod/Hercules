const express = require('express');

const app = new express();

app.get('/', function(req, res){
	res.send('Hello, Hercules');
});


module.exports = app;
