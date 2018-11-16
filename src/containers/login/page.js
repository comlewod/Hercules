import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export default class Index extends Component { 
	constructor(props){
		super(props)
		console.log(props)
	}
	handleSubmit(e){
		console.log('submit')
	}
	render(){
		return (
			<div>
				<div className="login-input">
					<label>user</label>
					<input name="name" />
				</div>
				<div className="login-input">
					<label>password</label>
					<input name="pwd" />
				</div>
				<button onClick={this.handleSubmit}>SUBMIT</button>
			</div>
		)
	}
}
