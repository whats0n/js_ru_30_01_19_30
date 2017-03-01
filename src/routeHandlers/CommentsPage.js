import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Comment from '../components/Comment'
import Loader from '../components/Loader'
import {loadComments} from '../AC'

class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
    	console.log(this.props, 'MY COMMENTS')
    	const {comments} = this.props;
    	const {page} = this.props.params;
    	const currentComments = comments.pages.get(page);
    	if (!currentComments) return <Loader />;
    	const pageComments = currentComments.get('comments').map(comment => <li key={comment}><Comment id={comment} /></li>);
    	console.log(pageComments, 'MY COMMENTS222222222');
        return (
        	<ul>
        		{pageComments}
        	</ul>
    	)
    }
}

export default connect((state, props) => {
	return {...state, ...props}
}, {loadComments})(CommentsPage)