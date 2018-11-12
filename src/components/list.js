import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Category from './category';
import Index from '../containers/index';

/* 
 *	按需加载 
 */
import lazyload from '../lazyload';

/*
 *	使用 bundle-loader 插件引用组件，返回的实际上是包装后的组件异步加载的函数
 *	name是生成js文件名称，这里是test.bundle.js
 */
import Test from 'bundle-loader?lazy&name=test!./test';	

class List extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Index} />
					<Route path="/category" component={Category} />
					<Route path="/product" component={Category} />

					<Route path="/test" component={lazyload(Test)} />

					<Route component={Nomatch} />
				</Switch>
			</div>
		);
	}
}

//自定义组件是一个返回react元素的函数
//箭头函数可以直接返回表达式
const Nomatch = () => {
	return <h1>404</h1>;
};
//上面是普通函数构造组件，如果要使用生命周期等钩子，可以通过react.component来创建组件类

export default List;
