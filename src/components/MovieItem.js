import React from 'react';
// import noImage from ;

function MovieItem({title, year, showMovie, poster}) {
  function addDefault(e) {
    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
  }

  return (
    <div className="card__group--card">
      <div className="card-view">
        <img
          src={poster}
          className="card-img"
          onError={addDefault}
          alt={title}
        />
      </div>
      <div className="card-body">
        <h4>{title}</h4>
        <p>{year}</p>
        <button onClick={showMovie}>View</button>
      </div>
    </div>
  );
}

export default MovieItem;