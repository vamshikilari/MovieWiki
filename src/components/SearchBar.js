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
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit}  className="ui form">
          <div className="field">
            <label>Search For Movies</label>
            <input
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
