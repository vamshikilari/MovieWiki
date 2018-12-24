import React from 'react'
import MovieItem from './MovieItem'


const MovieList = ({movies, currentPage, number}) => {
  const indexOfLastMovie = currentPage * number;
  const indexOfFirstMovie = indexOfLastMovie - number;
  const currentList = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const renderedList = currentList.map((movie, index) => {
        return <MovieItem key= { movie.id } movie= { movie } />;
      });
        return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
        );
}

export default MovieList
