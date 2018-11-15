import React, { Component } from 'react'
import Header from '../components/header/index'
import { Link } from 'react-router-dom';	

const Dom = () => (
	<div>
		<Link to="/">home page</Link>
		<Link to="/login"> login</Link>
		<Link to="/login/test"> test</Link>
		<Header />
	</div>
)

class Layout extends Component {
	constructor(props){
		super(props)
		this.state = {
			router: props.router
		}
	}
	render(){
		let Router = this.state.router
		return (
			<div>
				<Dom/>
				<Router />
			</div>
		)
	}
}

export default Layout
