import React, { Component } from 'react';

export default class Notify extends Component{
    render(){
        return(
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded mr-2" alt="..." />
                    <strong className="mr-auto"> EIT App</strong>
                    <small>Kind notice</small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    You do not have permission to perform this action
                </div>

            </div>

        )
    }
}