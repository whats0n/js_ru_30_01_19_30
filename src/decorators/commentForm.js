import React, { Component } from 'react';
//как упражнение - отлично. В реальной жизни так не делай: Декораторы нужны для реюза кода, нет смысла заводить его под одну задачу
export default (Form) => class LeaveComment extends Component {

	state = {
		username: '',
		message: ''
	}

	enterUsername = (e) => {
		let value = e.target.value;
		this.setState({
			username: value
		});
	}

	enterMessage = (e) => {
		let value = e.target.value;
		this.setState({
			message: value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.state.message.length) return;
		this.setState({
			username: '',
			message: ''
		});
	}

	render() {
		return <Form {...this.state} handleSubmit={this.handleSubmit} enterMessage={this.enterMessage} enterUsername={this.enterUsername} />
	}

}
