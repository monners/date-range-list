import React, { Component } from 'react';
import DateRangePicker from 'react-daterange-picker';

// Style Imports
import './style.date-picker.scss';

export default class DatePicker extends Component {
    render() {
        return (
            <DateRangePicker
                onSelect={this.props.onSelect}
                value={this.props.value}/>
        );
    }
}
