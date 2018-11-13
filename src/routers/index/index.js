import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router';	
import Layout from '../../layouts/layout'

const Index = () => (
	<Switch>
		<Route path="/" exact component={Layout} />
	</Switch>
)

export default Index
