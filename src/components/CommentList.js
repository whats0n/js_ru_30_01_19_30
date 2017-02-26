import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'
import {loadComments} from '../AC'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    componentWillReceiveProps({ isOpen, article, loadComments}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) loadComments(article.id);
    }

    render() {
        const actionText = this.props.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.props.toggleOpenComments}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null

        const {comments = [], id, commentsLoaded} = this.props.article
        if (!comments.length) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={id}/>
        </div>)
        if (!commentsLoaded) return <Loader />;

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)
        
        return <div>
            <ul>{commentItems}</ul>
            <NewCommentForm articleId={id} />
        </div>
    }
}

export default connect(null, {loadComments})(CommentList)

// export default CommentList