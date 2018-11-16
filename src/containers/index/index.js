import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Layout from '../../layouts/layout'

import './style';

const Dom = () => (
	<div>
		<div>INDEX PAGE</div>
	</div>
)

class Index extends Component { 
	render(){
		return (
			<Dom />
		)
	}
}

export default Index
