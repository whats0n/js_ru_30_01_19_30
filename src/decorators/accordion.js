import React from 'react'

export default (Component) => class Accordion extends React.Component {
    state = {
        openItemID: null
    }

    toggleOpen = id => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        if (id == this.state.openItemID) id = null;
        this.setState({
            openItemID: id
        })
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
    }
}