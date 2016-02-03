import React, { Component } from 'react';

// Custom Components
import DatePicker from './components/DatePicker';
import Button from './components/Button';



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
        this.setState({
            ranges: [...this.state.ranges, this.state.selectedRange]
        });
    };

    render() {
        return (
            <div className='app-container'>
                <h1>App</h1>
                <DatePicker
                    onSelect={this.handleSelect}/>
                <Button handleClick={this.handleButtonClick}>Add current range to list</Button>

                {console.log('selectedRange: ', this.state.selectedRange)}
                {console.log('ranges: ', this.state.ranges)}
            </div>
        );
    }
}
