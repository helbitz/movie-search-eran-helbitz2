import React from 'react';

const MovieItem = ({title, year, showMovie, poster}) => {
  return(
    <li onClick={ showMovie }>{title} - {year}</li>
  )
}

export default MovieItem;