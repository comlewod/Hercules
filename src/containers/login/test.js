import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

const Dom = () => (
	<div>
		<div>Login Test Page</div>
	</div>
)

class Index extends Component { 
	constructor(props){
		super(props)
	}
	render(props){
		return (
			<div>
				<div>{this.props.test.cart}</div>
				<Dom />
			</div>
		)
	}
}


const sendState = state => {
	return {
		test: state.cartobj,
	}
}

export default connect(sendState)(Index)
