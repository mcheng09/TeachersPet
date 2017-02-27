var React = require('react');
var Lecture = require('Lecture');

var LectureList = React.createClass({
  render: function() {
    var {lectures} = this.props;
    var renderLectures = () => {
      if (lectures.length === 0) {
        return (
          <p>No Lectures Available</p>
        )
      }
      return lectures.map((lecture) => {
        return (
          <Lecture key={lecture.id} {...lecture} />
        );
      });
    }
    return (
      <div>
        {renderLectures()}
      </div>
    )
  }
});

module.exports = LectureList;
