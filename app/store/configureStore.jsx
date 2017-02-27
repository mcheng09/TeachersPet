import * as redux from 'redux';

import {searchLectureReducer, lectureReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchLecture: searchLectureReducer,
    lectures: lectureReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
