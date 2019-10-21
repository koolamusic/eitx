import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base';

Meteor.startup( ()=> {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
  });
})
