import React, { Component } from 'react';

export default class button extends Component {
    render() {
        return (
            <button onClick={this.props.handleClick}>{this.props.children}</button>
        );
    }
}
