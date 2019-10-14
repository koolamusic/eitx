import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

    renderTasks = () => {
        return this.props.tasks.map((task) => ( 
            <Task key={task._id} task={task} />
        ));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()        
        
        Tasks.insert({
            text,
            createdAt: new Date()
        });
        
        // clear the form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    };

    render() {
        return (
          <div className="container">
            <header>
              <h1>Todo List</h1>
            {/* Add a form to the app */}
            <form className="new-task" onSubmit={this.handleSubmit}>
                <input type="text" ref="textInput" placeholder="Type to add new tasks" />
                {/* <button type="submit">submit</button> */}
            </form>
            
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