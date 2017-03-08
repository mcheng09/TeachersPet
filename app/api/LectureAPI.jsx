var $ = require('jQuery');
var pg = require('knex');
var axios = require('axios');

module.exports = {
  setLectures: function(lectures) {
    if ($.isArray(lectures)) {
      axios.post('/api/lectures/new', {
        lecture_name: lectures.lecture_name,
        lecture_professor: lectures.lecture_professor,
        lecture_time: lectures.lecture_time,
        lecture_location: lectures.lecture_location
      })
      .then(function(res){
        console.log(res);
      })
      .catch(function(err){
        console.log(lectures);
        console.log(err);
      })

      // localStorage.setItem('lectures', JSON.stringify(lectures));
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
