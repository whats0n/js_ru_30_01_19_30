import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import DateRange from './DateRange'
import AwesomeSelect from './Select'
import Counter from './Counter'
import {connect} from 'react-redux'

class App extends Component {
    state = {
        user: ''
    }

    render() {
        const {articles, filteredID, filteredDate} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter/>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <AwesomeSelect options={options} filteredID={filteredID} />
                <DateRange filteredDate={filteredDate}/>
                <ArticleList 
                    articles={articles}
                    filteredID={filteredID}
                    filteredDate={filteredDate}/>
                <Chart articles={articles}/>
            </div>
        )
    }

    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            })
        }
    }
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => ({
    articles: state.articles,
    filteredID: state.filteredID,
    filteredDate: state.filteredDate
}))(App)