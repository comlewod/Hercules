import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Category from './category';
import Product from './product';
import Aheader from './header';

class List extends Component {
	render() {
		return (
			<div>
				<div>
					<Aheader />
					<div><Link to="/">page</Link></div>
					<div><Link to="/body">body</Link></div>
					<div><Link to="/category">category</Link></div>
					<div><Link to="/product">product</Link></div>
				</div>
				<Switch>
					<Route exact path="/" component={Header} />
					<Route path="/body" component={Body} />
					<Route path="/category" component={Category} />
					<Route path="/product" component={Category} />
					<Route component={Nomatch} />
				</Switch>

				{(function(){ return 'javascript test' })()}
			</div>
		);
	}
}

const Header = () => (
	<h2>HEADER</h2>
);

const Nomatch = () => (
	<h1>404</h1>
);

const Body = (props) => (
	<div>
		<h3>BODY</h3>
		<Route path={`${props.path}/:name`} render={(a) => ( <div>haha</div> )} />
	</div>
);

export default List;
