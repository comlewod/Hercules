import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Layout from '../../layouts/layout'

const Index = ({match}) => (
	<Switch>
		<Route path={match.path} exact component={() => (<div>login</div>)} />
		<Route path={`${match.path}/test`} exact component={() => (<div>test123</div>)} />
	</Switch>
)

export default Index
