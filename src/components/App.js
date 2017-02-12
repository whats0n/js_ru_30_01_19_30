import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
    state = {
        user: '',
        selection: null,
        selectedDay: null
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { selectedDay } = this.state;
        return (
            <div>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <Select options = {options} onChange={this.handleSelectChange} value={this.state.selection} multi/>
                <DayPicker
                    selectedDays={ day => DateUtils.isSameDay(selectedDay, day) }
                    onDayClick={ this.handleDayClick } 
                />
                <p>{ selectedDay ? selectedDay.toLocaleDateString() : 'Please select a day 👻' }</p>
                <ArticleList articles={articles}/>
                <Chart articles={articles}/>
            </div>
        )
    }

    handleDayClick = (e, day, { selected }) => this.setState({ selectedDay: selected ? null : day })

    handleSelectChange = selection => this.setState({ selection })

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

export default App