/* eslint-env mocha */
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Random } from "meteor/random";
import { assert } from "chai";
import { Eits } from "../api/eits";
 
if (Meteor.isServer) {
  describe("Eits", () => {
    describe("methods", () => {
      const username = "larry";
      let EitId, userId;
      before(() => {
        let user = Meteor.users.findOne({ username: username });
        if (!user) {
          userId = Accounts.createUser({
            "username": username,
            "email": "larry@gmail.com",
            "password": "12345578",

          });
        } else {
            userId = user._id;
        }

      });
      
        beforeEach(() => {
            Eits.remove({});
            EitId = Eits.insert({
              name: "Andrew",
              age: "23",
              phone: "08122938823",
              country: "Nigeria",
              area: "Technology",
              fact: "Party Live",
              createdAt: new Date(),
              owner: userId,
              username: "dayoo"
            }

            );
            // Meteor.call("eits.insert" )

        });
      it("can create an EIT", () => {
        const insertEIT = Meteor.server.method_handlers["eits.insert"];
        const invocation = { userId }
        insertEIT.apply(invocation, [{
          name: "Dayo",
          age: 31,
          phone: 16626278,
          country: "Nigeria",
          area: "Technology",
          fact: "Party hype",
          createdAt: new Date(),
          owner: userId,
          username: "lawrence"
        }]);
        assert.equal(Eits.find().count(),2);
      });
      it("cannot create an EIT when not logged in", () => {
        const insertEIT = Meteor.server.method_handlers["eits.insert"];
        const invocation = { }

        assert.throws(() => {
          insertEIT.apply(invocation, [{
            name: "Dayo",
            age: "31",
            phone: "16626278",
            country: "Nigeria",
            area: "Technology",
            fact: "Party hype",
            createdAt: new Date(),
            owner: userId,
            username: "lawrence"
          }]);
        }, Meteor.Error, "You are not allowed to insert EIT");
        
        assert.equal(Eits.find().count(),1);
      });
        
      it("can delete owned EIT", () => {
                  // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteTask = Meteor.server.method_handlers["eits.remove"];
 
        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };
 
        // Run the method with `this` set to the fake invocation
        deleteTask.apply(invocation, [EitId]);
 
        // Verify that the method does what we expected
        assert.equal(Eits.find().count(), 0);
      });
      it("cannot delete someones EIT",() => {
        // test it in isolation
        const deleteTask = Meteor.server.method_handlers["eits.remove"];
 
        // Set up a fake method invocation that looks like what the method expects
        const invocation = { };
 
        // Run the method with `this` set to the fake invocation
        assert.throws(() => {
          deleteTask.apply(invocation, [EitId]);

        }, Meteor.Error, "You are not allowed to delete this");
        
 
        // Verify that the method does what we expected
        assert.equal(Eits.find().count(), 1);

      });
      it("can view all EITs",() => {
        const userId = Random.id();
        Eits.insert({
          name: "Dayo",
          age: "31",
          phone: "16626278",
          country: "Nigeria",
          area: "Tech",
          fact: "Party hype",
          createdAt: new Date(),
          owner: userId,
          username: "larry"
        });
        const invocation = {userId};
        const EITPublication = Meteor.server.publish_handlers.eits;
        assert.strictEqual(EITPublication.apply(invocation).count(),2);


      });
      it("can edit owned EIT",() => {
        const editEITs = Meteor.server.method_handlers["eits.edit"];
        const invocation = { userId };
        editEITs.apply(invocation, [EitId,{
          name: "Allie",
          age: "23",
          phone: "050482828",
          country: "Ghana",
          area: "Technology",
          fact: "Party hype",
          createdAt: new Date(),
          owner: userId,
          username: "larry"
        }]);
        assert.equal(Eits.find({name: "Helen"}).count(), 1);
      });
      it("cannot edit someones EIT",() => {
        const editEITs = Meteor.server.method_handlers["eits.edit"];
        const invocation = { };

        assert.throws(() => {
          editEITs.apply(invocation, [EitId,{
            name: "Helen",
            age: "23",
            phone: "166262578",
            country: "Nigeria",
            area: "Technology",
            fact: "Party hype",
            createdAt: new Date(),
            owner: userId,
            username: "larry"
          }]);
        }, Meteor.Error, "You cannot edit someone else EIT");
        
        assert.equal(Eits.find({name: "Helen"}).count(), 0);

      });
      it("can check owned EIT",() => {
        const setChecked = Meteor.server.method_handlers["eits.setChecked"];
        const invocation = { userId };          
        setChecked.apply(invocation, [EitId, true]);
        assert.equal(Eits.find({checked:true}).count(), 1);                

      });
      it("cannot check someones EIT",() => {
        const setChecked = Meteor.server.method_handlers["eits.setChecked"];
        const invocation = { };
        assert.throws(() => {
          setChecked.apply(invocation, [EitId, true]);
        }, Meteor.Error, "You are not allowed to do that");     
        
        assert.equal(Eits.find({checked:true}).count(), 0); 

      });
    });
  });
}