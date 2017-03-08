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
          lecture_name: action.lecture_name,
          lecture_professor: action.lecture_professor,
          lecture_time: action.lecture_time,
          lecture_location: action.lecture_location
        }
      ];
    case 'ADD_LECTURES':
      return [
        ...state,
        ...action.lectures
      ];
    default:
      return state;
  }
};
