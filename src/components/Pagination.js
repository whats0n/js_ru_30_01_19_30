import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {changeCommentsPage} from '../AC'

class Pagination extends Component {
    render() {
        console.log(this.props.page)
        const {page, total} = this.props
        const pages = Math.floor(total/5)
        const current = parseInt(page);
        const prevPage = current - 1
        const nextPage = current + 1
        const prev = prevPage <= 1 ? 1 : prevPage
        const next = page <= pages ? nextPage : current
        return (
            <div>
                <Link to={`/comments/${prev}`}>prev</Link>
                <Link to={`/comments/${next}`}>next</Link>
            </div>
        )
    }
}

export default connect((state, props) => {
    return { ...state, ...props }
}, {changeCommentsPage})(Pagination)