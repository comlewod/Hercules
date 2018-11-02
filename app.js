const path = require('path');
const express = require('express');
const openBrowser = require('react-dev-utils/openBrowser');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
	//不使用渲染引擎，所以使用sendFile
	res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

//app.listen(PORT, () => {
//	if( openBrowser('http://localhost:' + PORT) ){
//		console.log('The browser tab has benn opened');
//	}
//});

module.exports = app;
