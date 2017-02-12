import React, { Component } from 'react';
import LeaveMessage from '../decorators/commentForm'

class CommentForm extends Component {

	render() {
		return this.getForm();
	}

	getInput(props) {
		return <input 
			type="text" 
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
			style={{width: '100%', boxSizing: 'border-box'}}/>
	}

	getTextarea(props) {
		return <textarea 
			cols="30" 
			rows="10" 
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
			style={{width: '100%', resize: 'none', boxSizing: 'border-box'}}/>
	}

	getField(element) {
		return (
			<div style={{padding: '6px 0'}}>
				{element}
			</div>
		)
	}

	getForm() {
		let name = this.getInput({
			value: this.props.username,
			placeholder: "Name",
			onChange: this.props.enterUsername
		});

		let message = this.getTextarea({
			value: this.props.message,
			placeholder: "Message",
			onChange: this.props.enterMessage
		});

		let submit = <button 
			type="submit"
			style={{padding: '8px 12px', background: 'gold', border: 'none', outline: 'none', curser: 'pointer', boxSizing: 'border-box'}}>Add comment</button>;

		return (
			<form 
				action="/" 
				onSubmit={this.props.handleSubmit}
				style={{maxWidth: '600px'}}>
				<h3>Add comment</h3>
				{this.getField(name)}
				{this.getField(message)}
				{this.getField(submit)}
			</form>
		)
	}

}

export default LeaveMessage(CommentForm)