import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';	
import Loadable from 'react-loadable'

import IndexRouter from '../containers/index/index'
import Header from '../components/header/index'
import loading from '../components/lazyload/loading'

const AsyncLogin = Loadable({
	loader: () => import('../containers/login/index'),
	loading: loading 
})

const Dom = () => (
	<Fragment>
		<Header />
		<Switch>
			<Route path="/" exact component={IndexRouter} />
			<Route path="/login" exact component={AsyncLogin} />
			<Route component={Nomatch} />
		</Switch>
	</Fragment>
)

const Nomatch = () => (
	<h1>404</h1>
)

class Layout extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return <Dom/>
	}
}

export default Layout
