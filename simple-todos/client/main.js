import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App';

// const App = () => {
//   return (
//     <h1>This is my Todo App</h1>
//   )
// }

Meteor.startup( () => {
  render(<App />, document.getElementById('render-target'));
})