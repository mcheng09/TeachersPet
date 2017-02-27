var $ = require('jQuery');

module.exports = {
  setLectures: function(lectures) {
    if ($.isArray(lectures)) {
      localStorage.setItem('lectures', JSON.stringify(lectures));
      return lectures;
    }
  },
  getLectures: function() {
    var stringLectures = localStorage.getItem('lectures');
    var lectures = [];

    try {
      lectures = JSON.parse(stringLectures);
    }
    catch(e) {

    }

    return $.isArray(lectures) ? lectures : [];
  }
};
