import React, { Component } from 'react'
import Header from '../components/header/index'
import { Link } from 'react-router-dom';	

class Layout extends Component {
	render(){
		return DOM
	}
}

const DOM = (
	<div>
		<Link to="/">home page</Link>
		<Link to="/login"> login</Link>
		<Link to="/login/test"> test</Link>

		<Header />
	</div>
)

export default Layout
