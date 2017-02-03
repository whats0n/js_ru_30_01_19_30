import React, {Component} from 'react'

import Comments from './Comments'

export default class Article extends Component {
    state = {
        isOpen: false
    }
/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }
*/

    render() {
        const {article} = this.props
        return (
            <div className="article">
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <section>
                <div className="article__content">
                    <p>{this.props.article.text}</p>
                </div>
                <Comments comments={this.props.article.comments} />
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}