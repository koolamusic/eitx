import React, { Component } from 'react';
import FORM from './Form.jsx';
import UpdateForm from './edit.jsx';
import TABLE from './Table.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home.jsx';
class Nav extends Component {
    render() {
        return (
            <Router>
                <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand" href="#">Home</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home" href="#">EITs <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add" className="nav-link" href="#">Add EITs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/edit/:id" className="nav-link" href="#" tabIndex="-1" aria-disabled="false">Edit EIT</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search EIT by name" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>&nbsp;
                            <AccountsUIWrapper />
                            
                        </form>

                    </div>

                </nav>
                <Switch>
                    <Route path="/home">
                        <TABLE />
                    </Route>
                    <Route path="/add">
                        <FORM/>:
                    </Route>
                    <Route path="/edit/:id" component={UpdateForm} />
                        {/* <UpdateForm />
                    </Route> */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

                </div>
                

            </Router>
            
                )
            }
}

export default Nav