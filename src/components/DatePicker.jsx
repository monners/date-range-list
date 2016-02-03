import React, { Component } from 'react';
import DateRangePicker from 'react-daterange-picker';

// Style Imports
import './date-picker.scss';

export default class DatePicker extends Component {
    render() {
        return (
            <div>
                <DateRangePicker
                    onSelect={this.props.onSelect}/>
            </div>
        );
    }
}
