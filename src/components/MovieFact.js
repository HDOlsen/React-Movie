import React, { Component } from 'react';

export class MovieFact extends Component {

  handleShowMovieFactsButton = ((movie) => {

    this.props.handleShowFacts(movie)

  })

    render() {

    let movieItem = this.props.movies.map((movie) => {
      return (
          <li key={movie.imdbID}>
            <img id="poster" src={movie.Poster} alt={movie.Title}/>
            <button id="title" onClick={() => this.handleShowMovieFactsButton(movie)}>{movie.Title}</button>
          </li>
      )
    })

    return (
      <ul id="film">{movieItem}</ul>
    )}
}