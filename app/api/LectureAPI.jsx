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
    var stringLectures = localStorage.getItem('lectures');

    return axios.get('/api/lectures')
        .then(function(res){
          return res.data.data
        });

    //var lectures = [];
    //
    //try {
    //  lectures = JSON.parse(stringLectures);
    //}
    //catch(e) {
    //  console.log(e);
    //}
    //
    //console.log(lectures);
    //
    //return $.isArray(lectures) ? lectures : [];
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
