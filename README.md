Reactive Architecture for React
===============================

This project implements an auto-completing search list for movies
using a sample reactive architecture involving `baconjs`-based FRP and
`redux`/`recompose`.

We make no explicit use of React's lifecycle methods in favor of a
more principled approach.

An online demo can be found [here](http://reactive-architecture.surge.sh/).

The interesting pieces are as follows.

Business Logic
--------------

"Business logic" is written in Redux in `reducers.js`. The Redux state
contain only the current search string and and selected movie. Notably
the current list of auto-completions is appropriately not present in
the Redux state, as it is instead a derived property off the current
search input.

Stream Processing
-----------------

A stream processing function is defined in `stream-processors.js` that
reacts to the current search input and fetches movie results. This
contains relevant temporal logic including debouncing and correct
ordering of events, ultimately producing a stream of auto-completions.

Presenters
----------

The `presenters` folder contain the simple stateless components to
render the view.

MovieSearch.jsx
---------------

The main container component for the project. This uses `connect` from
`react-redux` and `mapPropsStream` from `recompose` to manufacture an
interactive container component from the business- and API logic.

Usage
=====

This project is based on [Create React App](https://github.com/facebookincubator/create-react-app).

```javascript
yarn install
yarn start
```
