import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
    state = {
        user: '',
        selection: null,
        from: null,
        to: null
    } 

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state;
        return (
            <div>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <Select options = {options} onChange={this.handleSelectChange} value={this.state.selection} multi/>
                <div className="RangeExample">
                    { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                    { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                    { from && to &&
                      <p>
                        You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                        { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
                      </p>
                    }
                    <DayPicker
                      numberOfMonths={ 2 }
                      selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                      onDayClick={ this.handleDayClick }
                    />
                </div>
                <ArticleList articles={articles}/>
                <Chart articles={articles}/>
            </div>
        )
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    }

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