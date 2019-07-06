import React, {Component} from 'react';
import '../scss/main.scss';
import { searchMovies, getMovie } from "../api/api";
import MovieList from './MovieList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchTerm) {
    searchMovies(searchTerm).then(data => { 
      let movies = [];
      movies = [...data];
      this.setState({ movies });
    });  
  }

  render() {
    return (
      <div>
        <MovieList
          movies = {this.state.movies} 
          handleSearch={this.handleSearch} 
        />
      </div>
    );
  }
}

export default App;
