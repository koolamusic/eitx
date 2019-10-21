import { Template } from 'meteor/templating';
import { EITs } from '../../api/eits.js';
import './eit_list.html';

Template.eitList.helpers({
    eits: EITs.find(),
});
