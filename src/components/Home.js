import React, { Component } from 'react'
import GoogleMap from './GoogleMap'
import CardsContainer from './CardsContainer'

export default class Home extends Component {
    render(){
        return(
            <div>
                {/* <h1>Welcome Back {this.props.user.username}!</h1> */}
                <div>
                    <CardsContainer allHomes={this.props.allHomes}/>
                </div>
                <div className="googleMap">
                    <GoogleMap allHomes={this.props.allHomes} />
                </div>
            </div>
        )
    }
}