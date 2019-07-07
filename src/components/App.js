import React, {Component} from 'react';
import '../scss/main.scss';
import { searchMovies, getMovie } from "../api/api";
import MovieInput from './MovieInput';
import MovieList from './MovieList';
import ShowMovie from './ShowMovie';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: {}
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleShowMovie = this.handleShowMovie.bind(this);
  }

  handleSearch(searchTerm) {
    searchMovies(searchTerm).then(data => { 
      let movies = [];
      movies = [...data];
      this.setState({ movies });
    });  
  }
  
  handleShowMovie(title, year){
    getMovie(title, year).then(data => {
      let movie = {};
      movie = {...data};
      this.setState({ movie });
    })
  }

  render() {
    return (
      <div>
        <MovieInput handleSearch={this.handleSearch} />
        <MovieList
          movies={this.state.movies}
          handleShowMovie={this.handleShowMovie}
        />
        <ShowMovie movieInfo={this.state.movie} />
      </div>
    );
  }
}

export default App;
