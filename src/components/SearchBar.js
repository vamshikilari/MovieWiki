import React, { Component } from 'react'

export class SearchBar extends Component {
  state = {term: ''};

  onInputchange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.term);
  }

  render() {
    return (
      <div className="row z-depth-1">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <label htmlFor="search">Search For Movies</label>
            <input
              id="search"
              type="text"
              value={this.state.term}
              name= 'term'
              onChange={this.onInputchange}
             />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
