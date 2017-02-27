export var setSearchLecture = (searchLecture) => {
  return {
    type: 'SET_SEARCH_LECTURE',
    searchLecture: searchLecture
  };
};

export var showLectures = () => {
  return {
    type: 'SHOW_LECTURES'
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
