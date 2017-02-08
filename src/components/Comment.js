import React, { PropTypes } from 'react'

function Comment(props) {
    const {text, user} = props.comment
    return (
        <div>
            {text}
            {user && <b> by {user}</b>}
        </div>
    )
}

Comment.PropTypes = {
	user: PropTypes.string,
	text: PropTypes.string.isRequired
};

export default Comment