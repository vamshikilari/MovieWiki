import React, { Component } from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import Pagination from './Pagination'
import { connect } from 'react-redux'
import { search, topRatedMovies } from '../store/actions/search'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 10,
      currentPage:1,
      term: ''
   };
  }

  componentDidMount(){
      this.props.topRatedMovies();
    }

    componentDidUpdate(){
      localStorage.setItem('lastSearched', JSON.stringify(this.state.term));
    }

  handleSubmit = (term) => {
    this.props.search(term);
    this.setState({
      term: term
    });
  }

  handleResultsPerPage = (event) => {
    this.setState({number: event.target.value});
  }

  handleClick = (event) => {
    this.setState({currentPage:Number(event.target.id)});
  }

  render() {
    return (
    <div>
        <SearchBar
          handleSubmit= {this.handleSubmit}
          />
        <Pagination
          number={this.state.number}
          perPage={this.handleResultsPerPage}
          pageNo= {this.handleClick}
          movies={this.props.movies}
        />
        <MovieList
          currentPage={this.state.currentPage}
          number={this.state.number}
          movies ={this.props.movies}
        />
    </div>
    )
  };
}

function mapStateToProps(state){
  return {
    movies: state.movieList.movies
  };
}

function bindActions(dispatch){
  return {
    search:term => dispatch(search(term)),
    topRatedMovies: () => dispatch(topRatedMovies())
  }
}

export default connect(mapStateToProps, bindActions) (Dashboard)
