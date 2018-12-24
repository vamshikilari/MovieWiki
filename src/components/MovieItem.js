import React from 'react'
import { Link} from 'react-router-dom'

export default function MovieItem({movie}) {
  let  str = movie.title.replace(/\s/g,'');
  return (
    <div className="container">
            <div className="row col s12 m7">
                <div className="card horizontal">
                    <div className="card-image">
                      <img alt="movie icon" src={"http://image.tmdb.org/t/p//w92/"+ movie.poster_path} className="responsive-img" />
                    </div>
                      <div className="header card-action">
                          <Link to={"/"+str+"/"+movie.id}>{movie.title}</Link>
                      </div>
                      <div className="card-content">{ movie.release_date } {''}
                        Rating: {movie.vote_average} {', '} popularity= { movie.popularity }                      </div>
                      </div>
                    </div>
                </div>
  );
}

// rating= { movie.vote_average }
// title= { movie.title }
// popularity= { movie.popularity }
// released= { movie.release_date }
// overview= {movie.overview }
// poster= {movie.poster_path}
