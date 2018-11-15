import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Layout from '../../layouts/layout'

import './style';

const Dom = () => (
	<div>
		<div>Login Page</div>
	</div>
)

class Index extends Component { 
	render(){
		return (
			<Layout body={Dom} />
		)
	}
}

export default Index
