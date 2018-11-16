import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';	
import Loadable from 'react-loadable'

import IndexRouter from '../containers/index/index'
import Header from '../components/header/index'
import loading from '../components/lazyload/loading'

//按需加载，异步加载模块
const AsyncLogin = Loadable({
	loader: () => import('../containers/login/index'),
	loading: loading 
})

const Nomatch = () => (
	<h1>404 Not found</h1>
)

export default () => (
	<Fragment>
		<Header />
		<Switch>
			<Route path="/" exact component={IndexRouter} />
			<Route path="/login" component={AsyncLogin} />
			<Route component={Nomatch} />
		</Switch>
	</Fragment>
)
