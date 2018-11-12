'use strict'

import react from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router';	
import component from './components/component';
import header from './components/header';
//import { createBrowserHistory } from 'history'; 

import { HashRouter, BrowserRouter } from 'react-router-dom';//browserHistroy模块已经从react-router独立出来，可以监听url变化，并生成location对象，并匹配到路由组件
//react-router-dom相比于react-router，提供了不少组件：Link、browserHistroy等
import Index from './containers/index/index'

const Test = ({match}) => (
	<div>
		<div>test haha</div>
		<Route path={`${match.url}/haha`} component={() => (<div>haha</div>)} />
		<Info year="1" month="2"></Info>
	</div>
)
const Info = (...rest) => (
	<div>
		{console.log(...rest)}
	</div>
)

//路由器组件无法接受两个及以上的子元素，包括自定义组件。
render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Index} />
			<Route path="/test" component={Test} />
		</Switch>
	</BrowserRouter>
, document.getElementById('app'));


