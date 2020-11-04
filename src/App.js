import React, { Component } from 'react'
import './App.css'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import { Redirect, Route, Switch } from 'react-router-dom'

const loginURL = 'http://localhost:8000/login/'
const profileURL = 'http://localhost:8000/profile/'
const homesURL = 'http://localhost:8000/homes/'
const favoritesURL = 'http://localhost:8000/favorites/'

class App extends Component {

  state = {
    user: [],
    allHomes: [],
    favorites: []
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

      fetch(favoritesURL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(response => response.json())
      .then(result => this.setState({favorites: result}))
  }

  addToFavorites = (home, user) => {
    fetch(favoritesURL, {
      method:'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {home: home.id, user: 1}
      )
    })
    .then(response => response.json())
    .then(favorite => this.setState({favorites: [...this.state.favorites, favorite]}))
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
        <PrivateRoute 
          exact path='/' 
          user={this.state.user} 
          allHomes={this.state.allHomes} 
          favorites={this.state.favorites} 
          clickAction={this.addToFavorites}
        />
        <Route path='/login' render={(props) => <Login {...props} login={this.login} />} />
        <Route render={() => <Redirect to="/" /> } />
      </Switch>
      </div>
    );
  }
}

export default App;

