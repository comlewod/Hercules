import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Test from './test'
import Page from './page'

import './style';

const Index = ({match}) => (
	<div>
		<h3>Login</h3>
		<Switch>
			<Route path={match.path} exact component={Page} />
			<Route path={`${match.path}/test`} component={Test} />
		</Switch>
	</div>
)

export default Index

