import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Typeahead} from 'react-bootstrap-typeahead'

export class SearchBar extends Component {
  state = {term: ''};

  onInputchange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    const res = JSON.parse(localStorage.getItem('state').movieList.searchHistory);
  }

  componentDidMount(){

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.term);
  }

  render() {
    return (
      <div className="row z-depth-1">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <label htmlFor="search">Search For Movies</label>
            <input
              id="search"
              type="text"
              value={this.state.term}
              name= 'term'
              onChange={this.onInputchange}
              required
             />
             <Typeahead
               labelKey="name"
               options={this.res}
               placeholder="Choose a state..."
             />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
