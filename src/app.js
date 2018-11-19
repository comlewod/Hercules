'use strict'

import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';	

import { HashRouter, BrowserRouter } from 'react-router-dom';//browserHistroy模块已经从react-router独立出来，可以监听url变化，并生成location对象，并匹配到路由组件
//react-router-dom相比于react-router，提供了不少组件：Link、browserHistroy等
import './components/common'

console.log(process)

//为避免相同layout的公用部分重复渲染，根据layout来分路由（只渲染路由部分即可）
import Layout from './layouts/layout'

render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Layout} />
		</Switch>
	</BrowserRouter>
, document.getElementById('app'));


