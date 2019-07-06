import React from 'react';

const ShowMovie = ({ movieInfo }) => {
  // console.log(movieInfo);
  let {Title, Year, Rated, Released} = movieInfo;
  return(
    <div>
      <p>Title: {Title}</p>
      <p>Year: {Year}</p>
      <p>Rated: {Rated}</p>
      <p>Released: {Released}</p>
    </div>
  )
}

export default ShowMovie;