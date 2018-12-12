const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const config = require('../config');

module.exports = app => {
	app.use(session({
		name: 'hercules_session_id',			//cookie名称
		secret: 'session_test',		//根据该秘钥对session值进行签名加密
		saveUninitialized: false,
		resave: false,
	}));

	app.use(express.static(path.join(config.ROOT, 'public')));
	//后端路由
	app.use('/api', require('../controllers'));

	app.get('/test', (req, res) => {
		res.sendFile(path.resolve(config.ROOT, 'views', 'test.html'));
	});
	app.get('/demo', (req, res) => {
		res.sendFile(path.resolve(config.ROOT, 'views', 'demo.html'));
	});

	//前端路由
	app.get('/*', (req, res) => {
		//不使用渲染引擎，所以使用sendFile
		res.sendFile(path.resolve(config.ROOT, 'views', 'index.html'));
	});

	
	return app;
}
