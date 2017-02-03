import React, {Component} from 'react'

export default class Comments extends Component {

	constructor(props) {
		super(props)
		this.state = {isOpen: false}
	}

	buildComment() {
		return this.props.comments.map(item => {
			return (
				<li className="comment" key={item.id}>
					<h4>{item.user}</h4>
					<p>{item.text}</p>
				</li>
			)
		})
	}

	render() {
		if (!this.props.comments) return null
		return (
			<div className="comments">
				{this.getButton()}
				{this.getComments()}
			</div>
		)
	}

	getComments() {
		if (!this.state.isOpen) return null
		return <ul className="commetns__list">{this.buildComment()}</ul>
	}

	getButton() {
		let label = this.state.isOpen ? 'Hide' : 'Show'
		return <button onClick={this.toggleComments}>{label} comments{this.props.comments.length}</button>
	}

	toggleComments = e => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

};