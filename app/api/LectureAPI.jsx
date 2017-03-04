var $ = require('jQuery');
var pg = require('knex');

module.exports = {
  // setLectures: function(lectures) {
  //   if ($.isArray(lectures)) {
  //     localStorage.setItem('lectures', JSON.stringify(lectures));
  //     return lectures;
  //   }
  // },
  getLectures: function() {
    // var stringLectures = localStorage.getItem('lectures');

    var stringLectures = pg('lectures')
      .select('lecture_name')
      .then(function(data){
        return JSON.stringify(data);
      });

    console.log(stringLectures);

    var lectures = [];

    try {
      lectures = JSON.parse(stringLectures);
    }
    catch(e) {
      console.log(e);
    }

    return $.isArray(lectures) ? lectures : [];
  },
  filterLectures: function(lectures, searchLecture) {
    var filteredLectures = lectures;

    filteredLectures = filteredLectures.filter((lecture) => {
      var lecture = lecture.name.toLowerCase();
      return searchLecture.length === 0 || lecture.indexOf(searchLecture) > -1;
    });

    return filteredLectures;
  }
};
