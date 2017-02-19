import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from '../CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle, getArticle} from '../../AC'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }
/*

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen
    }
*/
    
    showArticle = e => {
        this.props.toggleOpen(e)
        if (this.props.article.text) return;
        this.props.getArticle(this.props.article.id);
    }

    render() {
        const {article, toggleOpen} = this.props
        return (
            <div ref = {this.getContainerRef}>
                <h3>
                    <span onClick={this.showArticle}>{article.title}</span>
                    <a href="#" onClick = {this.handleDelete}>Delete me</a>
                </h3>
                <CSSTransition
                    transitionName="article-body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
    }

    getCommentsRef = (ref) => {
        this.commentList = ref
        if (!ref) return null
//        console.log('---', ref.state.isOpen, findDOMNode(ref))
    }

    getBody() {
        const {isOpen, article: {text, comments, id}} = this.props
        if (!isOpen) return null

        return (
            <section>
                {text}
                <CommentList comments={comments} articleId={id} ref = {this.getCommentsRef} />
            </section>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }
}

export default connect(null, { deleteArticle, getArticle })(Article)