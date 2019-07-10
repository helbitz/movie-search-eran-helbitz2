import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({handleShowMovie, movies}) => {
    var ShowList = movies[0].response;
    var MovieItems = ShowList === 'True' && movies[0].search.map(m => (
      <MovieItem
        key={m.imdbID}
        title={m.Title}
        year={m.Year}
        poster={m.Poster}
        showMovie={handleShowMovie.bind(this, m.Title, m.Year)}
      />
    ))
    
    return (
      <div>
        {ShowList === "True" ? (
          <div className="container">
            <div className="card">
              <div className="card__group">{MovieItems}</div>
            </div>
          </div>
        ) : (
          <div className='container'>
            <h1 className='flex errorFont'>Oops, {movies[0].search}</h1>
          </div>
        )}
      </div>
    );
}

export default MovieList;