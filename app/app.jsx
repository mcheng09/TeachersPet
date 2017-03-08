var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Schedule = require('Schedule');
var LectureAPI = require('LectureAPI');

var actions = require('actions');
var store = require('configureStore').configure();

var initialLectures = LectureAPI.getLectures();
initialLectures.then(function(lectures){
  store.dispatch(actions.addLectures(lectures));
});

store.subscribe(() => {
  var state = store.getState();
  console.log('New State', state);

  LectureAPI.setLectures(state.lectures);
});


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Schedule}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
