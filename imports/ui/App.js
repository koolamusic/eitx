import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// import Tasks Model from server
import { Tasks } from '../api/tasks'

import Task from './Task';


// App Component - represents the whole app
class App extends Component {
    getTasks = () => {
        return [
            { _id: 1, text: 'This is task 1' },
            { _id: 2, text: 'This is task 2' },
            { _id: 3, text: 'This is task 3' },
        ];
    }

    renderTasks() {
        return this.props.tasks.map((task) => ( 
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
          <div className="container">
            <header>
              <h1>Todo List</h1>
            </header>    
            <ul>
              {this.renderTasks()}
            </ul>
          </div>
        );
      }
    }

export default withTracker(() => {
    return {
        tasks: Tasks.find({}).fetch(),
    };
})(App);