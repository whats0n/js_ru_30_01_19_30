import React from 'react'

export default (Component) => class Accordion extends React.Component {
    state = {
        openItemID: null
    }

    toggleOpen = id => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            openItemID: id == this.state.openItemID ? null : id
        })
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
    }
}