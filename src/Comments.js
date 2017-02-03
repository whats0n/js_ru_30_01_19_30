import React, {Component} from 'react'

export default class Comments extends Component {

	constructor(props) {
		super(props)
		this.state = {isOpen: false}
		this.buildComment()
	}

	buildComment() {
		this.comments = this.props.comments.map(item => {
			return (
				<div className="comment" key={item.id}>
					<h5>{item.user}</h5>
					<p>{item.text}</p>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="comments">
				{this.getButton()}
				{this.getComments()}
			</div>
		)
	}

	getComments() {
		if (!this.state.isOpen) return null;
		return this.comments;
	}

	getButton() {
		let label = this.state.isOpen ? 'Hide' : 'Show'
		return <button onClick={this.toggleComments}>{label} comments ({this.props.comments.length})</button>
	}

	toggleComments = e => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

};