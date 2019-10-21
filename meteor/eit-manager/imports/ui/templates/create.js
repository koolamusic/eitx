import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './create.html'



Template.create.events({
    'submit .new-eit'(event) {
        event.preventDefault();

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
