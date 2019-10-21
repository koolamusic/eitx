import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {
  check
} from 'meteor/check';

export const EITs = new Mongo.Collection('eits');

if (Meteor.isServer) {
  Meteor.publish("eits", function eitsPublication() {
    return EITs.find();
  });
}

Meteor.methods({
  'eits.insert' (firstname, lastname, gender, dateOfBirth) {
    check(firstname, String);
    check(lastname, String);
    check(gender, String);
    check(dateOfBirth, String);

    EITs.insert({
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      dateOfBirth: dateOfBirth,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    })

  },
  'eits.update' (id, firstname, lastname, gender, dateOfBirth) {
    check(firstname, String);
    check(lastname, String);
    check(gender, String);
    check(dateOfBirth, String);

    EITs.update(id, {
      $set: {
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        dateOfBirth: dateOfBirth,
        createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.user().username,
      }
    })

  },
  "eits.remove" (eitId) {
    check(eitId, String);
    EITs.remove(eitId);
  },

})