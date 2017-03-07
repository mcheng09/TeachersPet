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
          lecture_name: action.name,
          lecture_professor: action.professor,
          lecture_time: action.time,
          lecture_location: action.location
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
