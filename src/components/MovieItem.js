import React from 'react';

const MovieItem = ({title, year, poster}) => {
  return(
    <li>{title} - {year}</li>
  )
}

export default MovieItem;