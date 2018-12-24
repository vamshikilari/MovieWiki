import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currentMovie } from '../store/actions/search'

class MovieDetail extends Component {

  componentWillMount(){
    this.props.currentMovie(this.props.match.params.movieId);
  }
  render(){
    return (
    <div className="ui container">
      <h1 className="ui header">{this.props.movie.title}</h1>
      <div className="ui grid">
        <div className="ui row">
            <div className="six wide column">
              <img alt="moviename" className="ui medium rounded image" src={"http://image.tmdb.org/t/p/w500/"+ this.props.movie.poster_path} />
            </div>
            <div className="ten wide column content">
                {this.props.movie.overview}
                <div className="">
                  Rating: {this.props.movie.vote_average}<br></br>
                  Popularity:{this.props.movie.popularity}<br></br>
                  Released: {this.props.movie.release_date}<br></br>
                  Revenue: {this.props.movie.revenue}
                </div>
              </div>
        </div>
      </div>
    </div>
  )
};
}

function mapStateToProps(state){
  console.log(state);
  return {
    movie: state.movieList.currentMovie
  };
}

function bindActions(dispatch){
  return {
    currentMovie:movieId => dispatch(currentMovie(movieId))
  };
}

export default connect(mapStateToProps, bindActions) (MovieDetail)
