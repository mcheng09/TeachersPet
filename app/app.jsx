var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var LectureAPI = require('LectureAPI');

var actions = require('actions');
var store = require('configureStore').configure();

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New State', state);
//
//   LectureAPI.setLectures(state.lectures);
// });
//
var initialLectures = LectureAPI.getLectures();
store.dispatch(actions.addLectures(initialLectures));

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app')
);
