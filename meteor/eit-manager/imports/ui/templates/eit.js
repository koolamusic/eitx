import { Template } from 'meteor/templating';

import { EITs } from '../../api/eits.js';

import './eit.html';

let deleteIds = [];

Template.eit.events({
    'click .toggle-checked'(event) {
        if (event.target.checked) {
            deleteIds.push(this._id);
        } else {
            deleteIds.splice(deleteIds.indexOf(this._id), 1);
        }
    },

    'click .updateBtn'(event) {
        updateEIT(this._id, this);
    },

    // 'click tr' (event) {
    //   updateEIT(this._id, this);
    // }
});

Template.body.events({
    'click #deleteBtn'() {
        for (index in deleteIds) {
            Meteor.call('eits.remove', deleteIds[index]);
        }
    },
});

function updateEIT(id, me) {
    let form = document.getElementById('eitForm');
    form.firstname.value = me.firstname;
    form.lastname.value = me.lastname;
    form.gender.value = me.gender;
    form.dateOfBirth.value = me.dateOfBirth;
    form.id.value = me._id;
}
