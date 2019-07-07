import React, { Component } from 'react';

class MovieInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="container__relative container__margin justified">
              <label>
                <input
                  type="text"
                  value={this.state.input}
                  autoComplete="off"
                  placeholder="Search"
                  onChange={this.handleChange}
                  className="search"
                  required
                />
              </label>
              <button type="submit" className="iconbox">
                <span className="iconbox__icon">
                  <i class="fa fa-search" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MovieInput;