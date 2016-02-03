import React, { Component } from 'react';
import Button from './components/Button';

export default class App extends Component {
constructor() {
    super();
    this.state = {
        selectedRange: 'bar',
        ranges: []
    };
}

handleClick = (foo) => {
    this.setState({selectedRange: foo});
};

render() {
    return (
            <div className='app-container'>
                <h1>App</h1>
                <Button handleClick={this.handleClick.bind(null, 'blerg')}>Click me!</Button>
                <span>{this.state.selectedRange}</span>
            </div>
        );
    }
}
