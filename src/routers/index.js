import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';	
import IndexRouter from './Index/index'

const routers = [
	{ path: '/login', component: 'Login/index' }
]

let routerArr = routers.map((obj, index) => {
	let component = require('./' + obj.component ).default//动态引入要加上限定的路径'./'
	return <Route key={index} path={obj.path} component={component} />
})


const Controller = () => (
	<Switch>
		<Route path="/" exact component={IndexRouter} />
		{ routerArr }
	</Switch>
)

export default Controller
