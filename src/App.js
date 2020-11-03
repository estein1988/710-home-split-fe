import React, { Component } from 'react'
import './App.css'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import { Redirect, Route, Switch } from 'react-router-dom'

const loginURL = 'http://localhost:8000/login/'
const profileURL = 'http://localhost:8000/profile/'
const homesURL = 'http://localhost:8000/homes/'

class App extends Component {

  state = {
    user: [],
    allHomes: []
  }

  componentDidMount(){
    if(localStorage.token){
      fetch(profileURL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(response => response.json())
      .then(result => this.setState({user: result}))
      
      fetch(homesURL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(response => response.json())
      .then(result => this.setState({allHomes: result}))
    }
  }

  login = (user) => {
    return fetch(loginURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( user )
    })
    .then(response => response.json())
    .then(result => {localStorage.setItem('token', result.access)
      this.setState({user: result.user})
    })
  }

  render(){
    return (
      <div className="App">
      <Switch>
        <PrivateRoute exact path='/' user={this.state.user} />
        <Route path='/login' render={(props) => <Login {...props} login={this.login} />} />
        <Route render={() => <Redirect to="/" /> } />
      </Switch>
      </div>
    );
  }
}

export default App;

