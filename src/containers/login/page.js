import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'

export default class Index extends Component { 
	constructor(props){
		super(props)
		this.state = {
			str: 'haha'
		}
		//通过bind返回新函数并绑定this，相当于传了this参数
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(e){
		this.setState({
			str: 'aaaa'
		})
		axios.get('/api/login')
		.then(res => {
			console.log(res)
		})
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
				<div>{this.state.str}</div>
				{/* 并不是把onclick直接绑定在dom上，所以该函数的this并不是该实例 */}
				<button onClick={this.handleSubmit}>SUBMIT</button>
			</div>
		)
	}
}
