import React, { Component } from 'react';

// task Component - represents a single todo item
export default class Task extends Component {
    render() {
        return (
            <li>{this.props.task.text}</li>
        )
    }
}