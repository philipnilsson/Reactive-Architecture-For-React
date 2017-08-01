import React from 'react';
import CompletionList from './CompletionList';
import MovieView from './MovieView';

export default function AutoCompleteInput({ text, movie, onChange, completions, onSelectMovie }) {
    return <div className="auto-complete">
      <input value={text} onChange={onChange} />
      <CompletionList completions={completions}
                      onSelectMovie={onSelectMovie} />
      <MovieView movie={movie} />
    </div>
}
