import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {

  const movieItems = props.movies.map((movie) => {
    return <MovieItem
              key={movie.id}
              movie={movie} />
  });

  return (
    <div>
      <ul className="list-group">
        {movieItems}
      </ul>
    </div>
  );
};



export default MovieList;