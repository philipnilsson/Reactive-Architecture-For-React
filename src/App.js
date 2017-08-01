import React from 'react';
import './App.css';
import MovieSearch from './features/movie-search/MovieSearch';

import { setObservableConfig } from 'recompose';
import baconConfig from 'recompose/baconObservableConfig'
setObservableConfig(baconConfig)

export default () => (
    <div className="App">
      <MovieSearch />
    </div>
);
