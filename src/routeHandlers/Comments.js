import React, { Component, PropTypes } from 'react'
import Pagination from '../components/Pagination'
import {loadComments} from '../AC'
import {connect} from 'react-redux'

class Comments extends Component {
    static propTypes = {

    };

    componentDidMount() {
    	const {page} = this.props.params
    	const pages = this.props.comments.pages
    	const current = !!pages && pages.get(page) && pages.get(page).size
    	const comments = page > 1 ? page * 5 - 1 : 0;
    	if (current) return;
    	this.props.loadComments(page, comments)
    }
    componentWillReceiveProps(nextProps) {
    	const {page} = nextProps.params
    	const pages = nextProps.comments.pages
    	const current = !!pages &&  pages.get(page) && pages.get(page).size
    	const comments = page > 1 ? page * 5 - 5 : 0;
    	console.log('receive', comments)
    	if (current) return;
    	this.props.loadComments(page, comments)
    }

    render() {
    	// console.log(this.props.params.page)
    	// console.log(this.state)
    	const {params, comments} = this.props;
    	const {page} = params;
    	const {total} = comments;
        return (
        	<div>
        		{this.props.children}
				<Pagination page={page} total={total} />
        	</div>
        )
    }

}

export default connect((state, props) => {
	return {...state, ...props}
}, {loadComments})(Comments)