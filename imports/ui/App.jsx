import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
// import FORM from './Form.jsx';
// import TABLE from './Table.jsx';
import Nav from './Nav.jsx';
import { Eits } from '../api/eits.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteSelected: false,
    }
  }

  toggleDeleteSelected() {
    this.setState({
      deleteSelected:!this.state.deleteSelected,
    });
  }

  render (){
    return(
      <div className="container">
        <Nav />
      </div>
    )
  }

}

export default withTracker(()=>{
  Meteor.subscribe('EITS');
  return {
    EITS: Eits.find({}, {sort:{createdAt: -1}}).fetch(),
    currentUser: Meteor.user(),
  };
})(App);
