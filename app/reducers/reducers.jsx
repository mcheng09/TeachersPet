var uuid = require('node-uuid');

export var searchLectureReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_LECTURE':
      return action.searchLecture;
    default:
      return state;
  };
};

export var lectureReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_LECTURE':
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          professor: action.professor,
          time: action.time,
          location: action.location
        }
      ];
    default:
      return state;
  }
};
