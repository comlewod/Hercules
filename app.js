const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const openBrowser = require('react-dev-utils/openBrowser');

var app = express();

//app.use(session({
//	name: 'hercules_session',
//	secret: 'session_test',		//根据该秘钥对session值进行签名加密
//}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
	//不使用渲染引擎，所以使用sendFile
	res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

//app.get('/test', (req, res) => {
//	res.sendFile(path.resolve(__dirname, 'views', 'test.html'));
//});

//app.listen(PORT, () => {
//	if( openBrowser('http://localhost:' + PORT) ){
//		console.log('The browser tab has benn opened');
//	}
//});

module.exports = app;
