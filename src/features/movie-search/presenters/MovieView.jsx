import React from 'react';

export default function MovieView({ movie }) {
    if (!movie) {
        return null;
    }
    return <div className="movie-view">
      <b>{ movie.title }</b>
      <div>Release date: { movie.release_date }</div>
      <div>Popularity: { movie.popularity.toFixed(2) }</div>
    </div>;
};
