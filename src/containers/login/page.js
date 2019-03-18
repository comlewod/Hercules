import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

class Index extends Component { 
	constructor(props){
		super(props)
		this.state = {
			name: '',
			pwd: '',
			tabIndex: 0,
			str: 'haha'	
		}
		this.obj = props.test
		this.changecart = props.changecart
		this.testClick = this.testClick.bind(this)
	}
	handleSubmit(e){
		this.setState({
			str: 'aaaa'
		})
		this.changecart()
		axios.get('/api/login')
		.then(res => {
		})
	}
	changeTab(index){
		this.setState({
			tabIndex: index
		})
	}
	inputChange(ev, key){
		let obj = {}
		obj[key] = ev.target.value
		this.setState(obj)
	}
	testClick(){
		//如果没有前面的this.testClick = this.testClick.bind(this)，这里的this将会是undefined
		console.log(this)
	}
	render(){
		return (
			<div>
				<div>
					<span onClick={() => (this.changeTab(0))}>Sign in</span>
					<span onClick={() => (this.changeTab(1))}>Sign up</span>
					<span onClick={this.testClick}>test click</span>
				</div>
				<br/>

				{ !this.state.tabIndex && (
				<div>
					<h3>SIGN IN</h3>
					<div className="login-input">
						<label>user: </label>
						<input name="name" value={this.state.name} onChange={(ev) => this.inputChange(ev, 'name')} />
					</div>
					<div className="login-input">
						<label>password</label>
						<input name="pwd" value={this.state.pwd} onChange={(ev) => this.inputChange(ev, 'pwd')} />
					</div>
					{/*
					<div>{this.props.test.cart}</div>
					<div>{this.obj.cart}</div>
					<div>{this.state.str}</div>
					*/}
					{/* 并不是把onclick直接绑定在dom上，所以该函数的this并不是该实例，传入的函数只是一个局部变量  */}
					<button onClick={() => this.handleSubmit()}>SUBMIT</button>
					<button onClick={ function(){ console.log(this) } }>SUBMIT</button>
				</div>
				)}

				{ this.state.tabIndex && (
				<div>
					<h3>SIGN UP</h3>
				</div>
				)}
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

