import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({handleShowMovie, movies}) => {
    let MovieItems = movies.map(m => (
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
        {MovieItems}
      </div>
    )
}

export default MovieList;