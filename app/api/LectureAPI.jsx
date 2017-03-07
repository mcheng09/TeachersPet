var $ = require('jQuery');
var pg = require('knex');
var axios = require('axios');

module.exports = {
  setLectures: function(lectures) {
    if ($.isArray(lectures)) {
      localStorage.setItem('lectures', JSON.stringify(lectures));
      return lectures;
    }
  },
  getLectures: function() {
    var lectures = [];

    return axios.get('/api/lectures')
      .then(function(res){
        return res.data.data;
      })

    return $.isArray(lectures) ? lectures : [];
  },
  filterLectures: function(lectures, searchLecture) {
    var filteredLectures = lectures;

    filteredLectures = filteredLectures.filter((lecture) => {
      var lecture = lecture.lecture_name.toLowerCase();
      return searchLecture.length === 0 || lecture.indexOf(searchLecture) > -1;
    });

    return filteredLectures;
  }
};
