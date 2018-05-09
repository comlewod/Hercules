'use strict'

import react from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router';	
import component from './components/component';
import header from './components/header';
//import { createBrowserHistory } from 'history'; 

import { BrowserRouter } from 'react-router-dom';//browserHistroy模块已经从react-router独立出来，可以监听url变化，并生成location对象，并匹配到路由组件

import './less/test';
import List from './list';

//const history = createBrowserHistory();

//react.render(`<component>`, document.getElementById('app'));

//render(
//	<Router history={history}>
//		<Switch>
//			<Route exact path="/" component={App} />
//			<Route path="/test" component={Header} />
//		</Switch>
//	</Router>
//, document.getElementById('app'));

render(
	<BrowserRouter>
		<List />
	</BrowserRouter>
, document.getElementById('app'));
