import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from "react-router-dom";

class FORM extends Component{
  constructor(props){
    super(props)
    this.initialState ={
      name:'',
      age:'',
      phone:'',
      country:'',
      area:'',
      fact:'',
      createdAt: '',
      owner: '',           // _id of logged in user
      username: '',  // username of logged in user
    }
    this.state = this.initialState
  }

  handleChange =( event )=> {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  submitForm = (event) => {
    const {name, age, phone, country, area, fact, createdAt, owner, username} = this.state;
    
    Meteor.call('eits.insert', name, age, phone, country, area, fact,createdAt, owner, username)
    
  }
  
  render (){
    const {name, age, phone, country, area, fact} = this.state
    return (
      
      <form className="form-group">
          <label>Name </label>
          <input
              className="form-control"
              type="text"
              name="name"
              ref="name"
              placeholder= "EIT's Name"
              value={name}
              onChange={this.handleChange}
          />
          <label>Age</label>
          <input
              type="text"
              ref="age"
              name="age"
              className="form-control"
              value={age}
              placeholder ="Age of Eit"
              onChange={this.handleChange}
          />
          <label>Country </label>
          <input
              type="text"
              className="form-control"
              ref="country"
              name="country"
              value={country}
              placeholder ="Home country"
              onChange={this.handleChange}
          />
          <label>Phone Number</label>
          <input
              type="text"
              className="form-control"
              ref="phone"
              name="phone"
              value={phone}
              placeholder ="Phone Number"
              onChange={this.handleChange}
          />
          <label>Area of Interest</label>
          <input
              type="text"
              ref="area"
              name="area"
              className="form-control"
              value={area}
              placeholder ="Area of Interest. ie business"
              onChange={this.handleChange}
          />
          <label>Interesting Fact</label>
          <input
              type="text"
              ref="fact"
              name="fact"
              className="form-control"
              value={fact}
              placeholder ="Interesting Fact obout EIT"
              onChange={this.handleChange}
          />
          <br></br>
          <Link to="/" className="btn btn-success" type="button" value="Submit" onClick={this.submitForm}>Submit</Link>

      </form>
  )
  }
}

export default FORM