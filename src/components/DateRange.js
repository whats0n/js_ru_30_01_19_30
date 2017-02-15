import React, { Component } from 'react'
import {connect} from 'react-redux';

import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';

import {filteredArticlesDate} from '../AC';

class DateRange extends Component {

    state = {
        from: null,
        to: null
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
        // console.log(Date.parse(day));
        this.props.filteredArticlesDate(Date.parse(range.from), Date.parse(range.to));
    }

    render() {
        const { from, to } = this.state;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(null, { filteredArticlesDate })(DateRange)