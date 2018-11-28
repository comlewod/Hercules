import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

class Index extends Component { 
	constructor(props){
		super(props)
		console.log(props)
		this.state = {
			str: 'haha'	
		}
		this.obj = props.test
		this.changecart = props.changecart
		//通过bind返回新函数并绑定this，相当于传了this参数
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(e){
		this.setState({
			str: 'aaaa'
		})
		this.changecart()
		axios.get('/api/login')
		.then(res => {
			//console.log(res)
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
				<div>{this.props.test.cart}</div>
				<div>{this.obj.cart}</div>
				<div>{this.state.str}</div>
				{/* 并不是把onclick直接绑定在dom上，所以该函数的this并不是该实例 */}
				<button onClick={this.handleSubmit}>SUBMIT</button>
			</div>
		)
	}
}

//提供redux的state数据
const sendState = state => {
	return {
		test: state.cartobj,
	}
}

//提供redux的dispatch方法
const sendDispatch = dispatch => {
	return {
		changecart: () => {
			dispatch({
				type: 'add',
				str: 'new cart'
			})
		}
	}
}

export default connect(sendState, sendDispatch)(Index)

