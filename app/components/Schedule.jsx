var React = require('react');
var uuid = require('node-uuid');

import AddLecture from 'AddLecture';
import LectureList from 'LectureList';
import LectureSearch from 'LectureSearch';
import LectureAPI from 'LectureAPI';

var Schedule = React.createClass({
  getInitialState: function() {
    return {
      searchLecture: '',
      lectures: LectureAPI.getLectures()
    };
  },
  componentDidUpdate: function() {
    LectureAPI.setLectures(this.state.lectures);
  },
  handleAddLecture: function(name, professor, time, location) {
    this.setState({
      lectures: [
        ...this.state.lectures,
        {
          id: uuid(),
          name: name,
          professor: professor,
          time: time,
          location: location
        }
      ]
    })
  },
  handleSearchLecture: function(searchLecture) {
    this.setState({
      searchLecture: searchLecture.toLowerCase()
    })
  },
  render: function() {
    var {lectures, searchLecture} = this.state;
    var filteredLectures = LectureAPI.filterLectures(lectures, searchLecture);
    return (
      <div className="text-center col-xs-8 col-xs-offset-2">
        <h3>Schedule Component</h3>
        <LectureSearch onSearch={this.handleSearchLecture}/>
        <LectureList/>
        <AddLecture handleAddLecture={this.handleAddLecture}/>
      </div>
    );
  }
})

module.exports = Schedule;
