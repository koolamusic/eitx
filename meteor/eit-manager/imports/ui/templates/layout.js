import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './layout.html'


Template.layout.onCreated(() =>console.log('ALIVE'))