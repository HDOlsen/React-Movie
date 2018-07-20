import React, { Component } from 'react';
import {Movie} from './components/Movie';
import {MovieFact} from './components/MovieFact';
import './App.css';
import './styles.css'

class App extends Component {

    //'http://www.omdbapi.com/?s=crow&apikey=c4496bfa'

    constructor(props) {
      super(props)
  
      console.log("constructor")
  
      this.state = {
        movies : [],
        movieFacts: []
      }
  
  
    }
  
    populateMovies() {
  
      fetch("http://www.omdbapi.com/?s=crow&apikey=c4496bfa")
      .then((response) => response.json())
      .then((json) => {
          this.setState({
          movies : json.Search
        })
      })
    }
  
    populateMovieFacts() {

      let imdbID = movie.imdbID
  
      fetch("http://www.omdbapi.com/?i="+imdbID+"&apikey=c4496bfa")
      .then((response) => response.json())
      .then((json) => { 
          this.setState({
            movieFacts : json.Search
        })
      })
    }
  
    componentWillMount() {
      console.log("componentWillMount")
    }
  
    componentDidMount() {
      this.populateMovies()
    }
  
    handleShowFacts = ((movie) => {
      this.populateMovieFacts(movie)
    })
  
    render() {
        return (
            <div id="container">
              <h2 id="stuff">The Crow Series</h2>
              <MovieFact movies={this.state.movies} handleShowFacts={this.handleShowFacts}/>
              <Movie movieFacts={this.state.movieFacts}/> 
            </div>
      )
    }
  }
  
  export default App;
