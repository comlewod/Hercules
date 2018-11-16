import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';	

import IndexRouter from '../containers/index/index'
import Header from '../components/header/index'

//该layout的所有路由
const routers = [
	{ path: '/login', component: 'login/index' }
]

let routerArr = routers.map((obj, index) => {
	let component = require('../containers/' + obj.component ).default//动态引入要加上限定的路径'./'
	return <Route key={index} path={obj.path} component={component} />
})

const Dom = () => (
	<Fragment>
		<Header />
		<Switch>
			<Route path="/" exact component={IndexRouter} />
			{ routerArr }
		</Switch>
	</Fragment>
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
