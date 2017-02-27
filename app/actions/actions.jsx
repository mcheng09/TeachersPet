export var setSearchLecture = (searchLecture) => {
  return {
    type: 'SET_SEARCH_LECTURE',
    searchLecture: searchLecture
  };
};

export var addLecture = (name, professor, time, location) => {
  return {
    type: 'ADD_LECTURE',
    name: name,
    professor: professor,
    time: time,
    location: location
  };
};

export var addLectures = (lectures) => {
  return {
    type: 'ADD_LECTURES',
    lectures: lectures
  }
};
