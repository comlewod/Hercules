import React, { Component } from "react";
import { Link } from 'react-router-dom';	

import './style'

const Dom = () => (
	<div className="header">
		<Link to="/">home page</Link>
		<Link to="/login"> login</Link>
		<Link to="/login/test"> test</Link>
	</div>
)

class Header extends Component{
	render(){
		return <Dom/>;
	}
}

export default Header;
