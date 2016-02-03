import React, { Component } from 'react';

// Style Imports
import './style.button.scss';


export default class button extends Component {
    render() {
        return (
            <div className='button-wrapper'>
                <button onClick={this.props.handleClick}>{this.props.children}</button>
            </div>
        );
    }
}
