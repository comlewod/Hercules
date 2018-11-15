import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Page from '../../containers/login/index'
import Test from '../../containers/login/test'

const Index = ({match}) => (
	<Switch>
		<Route path={match.path} exact component={Page} />
		<Route path={`${match.path}/test`} exact component={Test} />
	</Switch>
)

export default Index
