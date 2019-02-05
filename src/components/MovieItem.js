import React from 'react';

const MovieItem = (props) => {

  const posterPath = props.movie.poster_path;

  const basePosterUrl = 'http://image.tmdb.org/t/p/w185/';

  return (
    <li className='list-group-item'>
      <div className="movie-list media">
        <div className="media-left">
          <img className="media-object" src={basePosterUrl+posterPath} />
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            {props.movie.original_title}
          </h4>
          <p>{props.movie.overview}</p>
        </div>
      </div>
    </li>
  );
};


export default MovieItem;