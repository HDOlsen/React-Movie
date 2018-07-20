import React, {Component} from 'react';

export class Movie extends Component {


  render() {

    let movieItem = this.props.movieFacts.map((movie) => {
      return (
          <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <img id="moviePoster" src={movie.Poster} alt={movie.Title} />
            <div id="movieFacts">
              <div>Year: {movie.Year}</div>
              <div>Rated: {movie.Rated}</div>
              <div>Released: {movie.Released}</div>
              <div>Director: {movie.Director}</div>
            </div>
          </li>
      )
    })

    return (
      <div>
        <h1>Movie Details</h1>
        <div id="movieDetailsContainer">
          {movieItem}
        </div>
      </div>
    )
  }
}
