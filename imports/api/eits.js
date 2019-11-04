import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Eits = new Mongo.Collection('eits');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('eits', function tasksPublication() {
      return Eits.find();
    });
  }

Meteor.methods({
    'eits.insert'(name, age, phone, country, area, fact) {
        if (!this.userId) {
            // alert("You are not authorized to perform this task")
            throw new Meteor.Error("You are not allowed to insert EIT");
        }
        Eits.insert({
            name,
            age,
            phone,
            country,
            area,
            fact,
            createdAt: new Date(),
            owner: this.userId,           // _id of logged in user
            username: Meteor.user.username,  // username of logged in user
        })
    },
    'eits.remove'(eitId) {
        const eit = Eits.findOne(eitId);
        if (eit.owner !== this.userId) {
            // alert("You are not authorized to perform this task")
                throw new Meteor.Error("You are not allowed to delete this");
              }
            Eits.remove(eitId);
    
        },
    'eits.setChecked'(eitId, setChecked){
        const eit = Eits.findOne(eitId);
        if(eit.owner !== this.userId){
            throw new Meteor.Error("You are not allowed to do that");
        }
        Eits.update(eitId, {
            $set: { checked: setChecked },
        });

    },
            
    'eits.deleteSelected'(){
        const eit = Eits.findOne(eitId);
        if (eit.owner !== this.userId) {
            // alert("You are not authorized to perform this task")
            throw new Meteor.Error("not-authorized");
              }
        const checkedEits = Eits.find({checked: true}).fetch();
                checkedEits.map((eit) => Eits.remove(eit._id))
        
        
            },
    'eits.edit'(eitId, newData){
        const eit = Eits.findOne(eitId);
        if (eit.owner !== this.userId) {
            // alert("You are not authorized to perform this task")
                throw new Meteor.Error("You cannot edit someone else EIT");
              }
        Eits.update(eitId,{
                    $set: {
                    name: newData.name,
                age: newData.age,
                phone: newData.phone,
                country: newData.country,
                area: newData.area,
                fact: newData.fact,
                updatedAt: new Date(),
                owner: Meteor.userId,           // _id of logged in user
                username: Meteor.user.username,  // username of logged in user

            }
        }

        )
        console.log(eitId)
    }

})