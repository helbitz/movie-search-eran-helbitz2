import React, {Component} from 'react';
import '../scss/main.scss';
import { searchMovies, getMovie } from "../api/api";
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
    console.log(this.state.movie)
    return (
      <div>
        <MovieList
          movies = {this.state.movies} 
          handleSearch={this.handleSearch}
          handleShowMovie={this.handleShowMovie} 
        />
        <ShowMovie movieInfo={this.state.movie}/>
      </div>
    );
  }
}

export default App;
