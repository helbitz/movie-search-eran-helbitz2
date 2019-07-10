import React from 'react';
import MovieItem from './MovieItem';
import Pagination from "react-js-pagination";

const MovieList = ({handleShowMovie, movies, handleSearch, activePage, searchTerm}) => {
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

    function handlePageChange(pageNumber) {
      console.log(pageNumber)
      handleSearch(searchTerm, pageNumber);
    }

    return (
      <div>
        {ShowList === "True" ? (
          <div>
            <div className="container">
              <div className="card">
                <div className="card__group">{MovieItems}</div>
              </div>
              <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={movies[0].totalResults}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />
            </div>
          </div>
        ) : (
          <div className="container">
            <h1 className="flex errorFont">Oops, {movies[0].search}</h1>
          </div>
        )}
      </div>
    );
}

export default MovieList;