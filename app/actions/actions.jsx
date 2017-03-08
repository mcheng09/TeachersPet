export var setSearchLecture = (searchLecture) => {
  return {
    type: 'SET_SEARCH_LECTURE',
    searchLecture: searchLecture
  };
};

export var addLecture = (lecture_name, lecture_professor, lecture_time, lecture_location) => {
  return {
    type: 'ADD_LECTURE',
    lecture_name: lecture_name,
    lecture_professor: lecture_professor,
    lecture_time: lecture_time,
    lecture_location: lecture_location
  };
};

export var addLectures = (lectures) => {
  return {
    type: 'ADD_LECTURES',
    lectures: lectures
  }
};
