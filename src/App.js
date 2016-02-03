import React, { Component } from 'react';

// Custom Components
import DatePicker from './components/DatePicker';
import Button from './components/Button';
import RangeList from './components/RangeList';

// Base Style Import
import './scss/base.scss';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedRange: null,
            ranges: []
        };
    }

    handleSelect = (range, states) => {
        this.setState({
            selectedRange: range
        });
    };

    handleButtonClick = () => {
        // Make sure a selected range exists
        if (!!this.state.selectedRange) {
            this.setState({
                ranges: [...this.state.ranges, this.state.selectedRange]
            });
        }
    };

    render() {
        return (
            <div className='app-container'>
                <h1>Date Range Picker</h1>
                <DatePicker
                    onSelect={this.handleSelect}/>
                <Button handleClick={this.handleButtonClick}>Add current range to list</Button>

                <RangeList items={this.state.ranges} />
            </div>
        );
    }
}
