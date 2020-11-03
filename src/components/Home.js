import React, { Component } from 'react'
import GoogleMap from './GoogleMap'

export default class Home extends Component {
    render(){
    return(
        <div>
            <h1>Welcome Back {this.props.user.username}!</h1>
            <div className="googleMap">
            <GoogleMap/> 
            </div>
        </div>
    )
    }
}