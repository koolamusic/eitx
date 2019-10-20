import React, { Component } from 'react';

// import Tasks model from api
import { Tasks } from '../api/tasks';



// task Component - represents a single todo item
export default class Task extends Component {

    // function to toggle checked property
    toggleChecked = () => {
        // set the checked property to the opposite of its current value
        Tasks.update(this.props.task._id, {
            $set: { checked: !this.props.tasks.checked},
        });
    }

    // method to delete a task 
    deleteThisTask = () => {
        Tasks.remove(this.props.task_id);
    }
     
    

    render() {
        return (
            <React.Fragment>
            <li>{this.props.task.text}</li>
            {/* <p>{this.props.task._id._str || this.props.task._id}</p> */}
            </React.Fragment>
        )
    }
}