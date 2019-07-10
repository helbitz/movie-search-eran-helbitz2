import React, {Component} from 'react';
import '../scss/main.scss';
import { searchMovies, getMovie } from "../api/api";
import Navbar from './Navbar';
import MovieInput from './MovieInput';
import MovieList from './MovieList';
import ShowMovie from './ShowMovie';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: {},
      showMovie: false,
      showMovies: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleShowMovie = this.handleShowMovie.bind(this);
  }

  handleSearch(searchTerm) {
    searchMovies(searchTerm).then(data => { 
      let movies = [];
      movies = [data];
      this.setState({ movies, showMovie: false, showMovies: true });
    })
    .catch(error => 
      console.log(error)
    )  
  }
  
  handleShowMovie(title, year){
    getMovie(title, year).then(data => {
      let movie = {};
      movie = {...data};
      this.setState({ movie, showMovie: true, showMovies: false });
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <MovieInput handleSearch={this.handleSearch} />
        {(this.state.showMovies &&
          <MovieList
            movies={this.state.movies}
            handleShowMovie={this.handleShowMovie}
          />
        )} 
        {(this.state.showMovie && <ShowMovie movieInfo={this.state.movie} />)}
      </div>
    );
  }
}

export default App;
