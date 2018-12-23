import React from 'react'
import { Link} from 'react-router-dom'

export default function MovieItem({movie}) {
  return (
    <div className="ui container">
            <div className="ui grid">
                <div className="ui row">
                    <div className="sixteen wide column">
                        <div className="ui massive relaxed divided list">
                            <div className="item">
                                <img alt="movie icon" src={"http://image.tmdb.org/t/p//w92/"+ movie.poster_path} className="large middle aligned icon" />
                                <div className="content">
                                <Link to={"/"+movie.title+"/"+movie.id}>{movie.title}</Link>
                                <div className="description">{ movie.release_date } {''} </div>
                                <div className="description">Rating: {movie.vote_average} {', '} popularity= { movie.popularity }</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

// rating= { movie.vote_average }
// title= { movie.title }
// popularity= { movie.popularity }
// released= { movie.release_date }
// overview= {movie.overview }
// poster= {movie.poster_path}
