import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { EITs } from '../api/eits.js';

import './body.html';
import './templates/eit_list.js';
import './templates/eit.js';
import './templates/layout.html'

Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('eits');
});

Template.body.events({
    'submit .new-eit'(event) {
        event.preventDefault();
        // console.log({event})

        // Get value from form element
        const target = event.target;
        const firstname = target.firstname.value;
        const lastname = target.lastname.value;
        const gender = target.gender.value;
        const dateOfBirth = target.dateOfBirth.value;
        const id = target.id.value;
        target.id.value = '';
        if (id) {
            // Insert a task into the collection
            Meteor.call(
                'eits.update',
                id,
                firstname,
                lastname,
                gender,
                dateOfBirth
            );
        } else {
            Meteor.call(
                'eits.insert',
                firstname,
                lastname,
                gender,
                dateOfBirth
            );
        }
        // Clear form
        target.reset();
    },
});
