import React from 'react'
import MovieItem from './MovieItem'


const MovieList = ({movieList, handleClick}) => {
    const renderedList = movieList.map((movie) => {
        return <MovieItem key= { movie.id } movie= { movie } />;
      });
        return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
        );
}

export default MovieList
