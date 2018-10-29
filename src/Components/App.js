import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { latestMovies } from '../Actions/movieActions'
import Login from './Login/Login'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Movie from './Movie/Movie'
import MovieContainer from './MovieContainer/MovieContainer'
import * as api from '../Helpers/apiCaller'
import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const { latestMovies } = this.props
    const nowPlaying = await api.fetchNowPlaying()

    latestMovies(nowPlaying)
  }
  render() {
    return (
      <div>

        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="App">
                <Login />
              </div>
            )
          }}
        />
        <Route
          exact
          path="/login"
          render={() => {
            return (
              <Login />
            )
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userExists: state.userExists,
  userSuccess: state.userSuccess
})

const mapDispatchToProps = dispatch => ({
  latestMovies: movies => dispatch(latestMovies(movies)),
})

export default connect(
  null,
  mapDispatchToProps
)(App)
