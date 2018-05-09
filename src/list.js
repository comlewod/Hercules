import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class List extends Component {
	render() {
		return (
			<div>
				<div>
					<span><Link to="/">page</Link></span>
					<span><Link to="/body">body</Link></span>
				</div>
				<Switch>
					<Route exact path="/" component={Header} />
					<Route path="/body" component={Body} />
				</Switch>
			</div>
		);
	}
}

const Header = () => (
	<h2>HEADER</h2>
);

const Body = (props) => (
	<div>
		<h3>BODY</h3>
		<Route path={`${props.path}/:name`} render={(a) => ( <div>haha</div> )} />
	</div>
);

export default List;
