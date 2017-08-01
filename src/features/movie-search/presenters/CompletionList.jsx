import React from 'react';

export default function CompletionList({ completions, onSelectMovie }) {
    return <ul className="completions" style={{ height: completions.length * 25.2 }}>
      { completions.map((c, ix) =>
          <li key={ix} onClick={() => onSelectMovie(c)}>{ c.title }</li>)
      }
    </ul>;
}
