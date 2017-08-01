import { fromPromise } from 'baconjs';

const queryURL =
    '//api.themoviedb.org/3/search/movie?api_key=9eae05e667b4d5d9fbb75d27622347fe&query=';

function queryMovie(query) {
    if (!query) {
        return Promise.resolve([])
    }
    console.info('making request for', query);
    return fetch(
        queryURL + encodeURIComponent(query))
        .then(r => r.json())
        .then(r => r.results.slice(0, 10));
}

export default function makeCompletions(props$) {

    const completions = props$
        .map(({ text }) => text)
        .debounceResponsive(300)
        .skipDuplicates()
        .flatMapLatest(query => fromPromise(queryMovie(query)));

    return props$.combine(completions, (props, completions) => ({
        ...props, completions
    }));
}
