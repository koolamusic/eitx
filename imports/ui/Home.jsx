import React, {Component} from 'react';
import FORM from './Form.jsx';
import TABLE from './Table.jsx';

class Home extends Component{
    render(){
        return(
            <div className="container">

            <div className="row">
                <div className="col-12">
                    <FORM />
                </div>
                <div className="col-md-12 col-sm-12">
                    <TABLE  />
                </div>
            </div>
            </div>
        )
    }
}

export default Home