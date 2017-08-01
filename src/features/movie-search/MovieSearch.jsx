// Movie Search container component

import AutoCompleteInput from './presenters/AutoCompleteInput';
import { connect } from 'react-redux';
import { mapPropsStream } from 'recompose';
import EVENTS from './events';
import makeCompletions from './stream-processors';

const mapStateToProps =
    ({ searchString, currentMovie }) => ({
        text: searchString,
        movie: currentMovie
    });

const mapDispatchToProps = dispatch => ({
    onChange: ev => dispatch({
        type: EVENTS.SET_SEARCH_STRING,
        searchString: ev.target.value
    }),
    onSelectMovie: movie => {
        dispatch({
          type: EVENTS.SELECT_MOVIE,
          movie
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(
    mapPropsStream(makeCompletions)(AutoCompleteInput)
);
