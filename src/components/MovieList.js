import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({handleShowMovie, movies}) => {
    var MovieItems = movies[0].search.map(m => (
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
        <div className='container'>
          <div className='card'>
            <div className='card__group'>
              {MovieItems}
            </div>
          </div>
        </div>
      </div>
    )
}

export default MovieList;