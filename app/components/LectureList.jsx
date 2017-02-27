var React = require('react');
var {connect} = require('react-redux');
import Lecture from 'Lecture';
import LectureAPI from 'LectureAPI';

export var LectureList = React.createClass({
  render: function() {
    var {lectures, searchLecture} = this.props;
    var renderLectures = () => {
      if (lectures.length === 0) {
        return (
          <p>No Lectures Available</p>
        )
      }
      return LectureAPI.filterLectures(lectures, searchLecture).map((lecture) => {
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

export default connect(
  (state) => {
    return state;
  }
)(LectureList);
