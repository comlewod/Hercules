const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const openBrowser = require('react-dev-utils/openBrowser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

var csrfProtection = csrf({ 
	//cookie: {key: 'csrf_token'}
	cookie: true 
});

app.get('/', (req, res) => {
	//不使用渲染引擎，所以使用sendFile
	res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

app.get('/test', csrfProtection, (req, res) => {
	console.log(req.csrfToken());
	//res.send(req.csrfToken());
	res.sendFile(path.resolve(__dirname, 'views', 'test.html'));
});

app.post('/send', csrfProtection, (req, res) => {
	res.send('haha');
});

//app.listen(PORT, () => {
//	if( openBrowser('http://localhost:' + PORT) ){
//		console.log('The browser tab has benn opened');
//	}
//});

module.exports = app;
