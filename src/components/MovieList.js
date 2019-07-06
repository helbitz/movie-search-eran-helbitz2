import React, {Component} from 'react';

class MovieList extends Component{
  constructor(props) {
    super(props)

    this.state = {
      input:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
    
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.input); 
    this.setState({input: ''})
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <input
            type="text"
            value={this.state.input}
            autoComplete="off"
            placeholder="Search"
            onChange={this.handleChange}
          />
        </label>
        <button type='submit'>Search</button>
      </form>
    );
  }
} 

export default MovieList;