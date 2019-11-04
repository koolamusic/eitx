import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Eits } from '../api/eits';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="row">  </th>
        <th scope="row">Name</th>
        <th scope="row">Age</th>
        <th scope="row">Country</th>
        <th scope="row">Phone Number</th>
        <th scope="row">Area of Interest</th>
        <th scope="row">Interesting Fact</th>
        <th scope="row"><button className="btn btn-light" onClick={() => Meteor.call('eits.deleteSelected')}>Delete Selected</button></th>
        <th scope="row" >Posted by</th>
      </tr>
    </thead>
  )
}


const TableBody = props => {

  const rows = props.eitData.map((row, index) => {
    return (
      <tr key={index}>
        <td>
          <input
            type="checkbox"
            checked={row.checked}
            onChange={(event) => Meteor.call('eits.setChecked', row._id, event.target.checked)}
          />
        </td>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>{row.country}</td>
        <td>{row.phone}</td>
        <td>{row.area}</td>
        <td>{row.fact}</td>
        <td>

          <Link className="btn btn-info" to={`/edit/${row._id}`}>Edit </Link>&nbsp;
          <button className="btn btn-danger" onClick={() => Meteor.call('eits.remove', row._id)}>Delete</button>
        </td>
        <td>
        <span  className="btn btn-light">
          {row.username}
        </span>
        </td>
        
      </tr>
    )
  });
  return (
      <tbody>{rows}</tbody>
  )

}
class TABLE extends Component {
  

  render() {
    const { eitData } = this.props
    return (
      <table className="table">
        <TableHeader />
        <TableBody {...this.props} />
      </table>
    )
  }
}

export default withTracker(props => {
  return {
    eitData: Eits.find({}).fetch()
  }

})(TABLE);