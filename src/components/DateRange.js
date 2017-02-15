import React, { Component } from 'react'
import {connect} from 'react-redux';

import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';

import {filteredArticlesDate} from '../AC';

class DateRange extends Component {

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, {
            from: this.props.filteredDate.dateFrom,
            to: this.props.filteredDate.dateTo
        });
        this.props.filteredArticlesDate(range.from, range.to);
    }

    render() {
        const from = this.props.filteredDate.dateFrom;
        const to = this.props.filteredDate.dateTo;
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