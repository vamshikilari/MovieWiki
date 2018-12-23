import React, { Component } from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import Pagination from './Pagination'
import { connect } from 'react-redux'
import { search } from '../store/actions/search'

class Dashboard extends Component {
  constructor(props){
    super(props);
    //state = { };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const startUp ='shawshank redemption';
    this.props.search(startUp);
  }

  handleSubmit = (term) => {
    this.props.search(term);
  }



  render() {
    return (
    <div>
        <SearchBar handleSubmit= {this.handleSubmit} />
        <Pagination />
        <MovieList movieList ={this.props.movies} />
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    movies: state.movieList.movies
  };
}

function bindActions(dispatch){
  return {
    search:term => dispatch(search(term))
  }
}

export default connect(mapStateToProps, bindActions) (Dashboard)
