import React, { Component } from 'react';
import DateRangePicker from 'react-daterange-picker';

// Lib Imports
import moment from 'moment';
import 'moment-range';

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
