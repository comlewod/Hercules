'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Route, Switch } from 'react-router-dom'
//browserHistroy模块已经从react-router独立出来，可以监听url变化，并生成location对象，并匹配到路由组件
//react-router-dom相比于react-router，提供了不少组件：Link、browserHistroy等
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './components/common'

//console.log(process)

//为避免相同layout的公用部分重复渲染，根据layout来分路由（只渲染路由部分即可）
import Layout from './layouts/layout'

var initData = {
	cart: 'cart' 
}
var cartReducer = (state=initData, action) => {
	if( action.type == 'add' ){
		return { cart: action.str }
	} else {
		return state
	}
}

var product = 'test'
var productReducer = (state=product, action) => {
	return state
}

const reducer = {
	cartobj: cartReducer,
	product: productReducer
}

const rootReducer = combineReducers(reducer)

const store = createStore(rootReducer)
store.subscribe(() => {
	console.log(store.getState())
})
//store.dispatch(action)

render(
	<BrowserRouter>
		<Provider store={store}>
			<Switch>
				<Route path="/" component={Layout} />
			</Switch>
		</Provider>
	</BrowserRouter>
, document.getElementById('app'));


