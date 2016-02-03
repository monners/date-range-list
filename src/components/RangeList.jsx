import React, { Component } from 'react';

// Lib Imports
import moment from 'moment';
import 'moment-range';

export default class RangeList extends Component {
    formatDate(dateRange) {
        // Clean up the format of the date range
        return <span>From {dateRange.start.format('dddd, MMMM Do YYYY')} <strong>to</strong> {dateRange.end.format('dddd, MMMM Do YYYY')}</span>;
    }

    constructList(items) {
        // We're using the array index as the key here.  That's bad.  A unique identifier is preferred.
        return (
            items.map((item, i) => <li key={i}>{this.formatDate(item)}</li>)
        );
    }

    render() {
        return (
            <div className='range-list-container'>
                <ul className='range-list'>
                    {this.constructList(this.props.items)}
                </ul>
            </div>
        );
    }
}

RangeList.propTypes = {
    items: React.PropTypes.array
};
