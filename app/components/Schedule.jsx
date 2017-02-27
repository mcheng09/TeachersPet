var React = require('react');
var AddLecture = require('AddLecture');
var LectureList = require('LectureList');
var LectureSearch = require('LectureSearch');
var uuid = require('node-uuid');

var Schedule = React.createClass({
  getInitialState: function() {
    return {
      searchLecture: '',
      lectures: [
        {
          id: uuid(),
          name: "English",
          professor: "Chang",
          time: "Monday",
          location: "ESL101"
        },
        {
          id: uuid(),
          name: "Math",
          professor: "Cheng",
          time: "Wednesday",
          location: "CS49"
        },
        {
          id: uuid(),
          name: "Chemistry",
          professor: "Gomez",
          time: "Friday",
          location: "BB11"
        }
      ]
    }
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
    var {lectures} = this.state;
    return (
      <div className="text-center col-xs-8 col-xs-offset-2">
        <h3>Schedule Component</h3>
        <LectureSearch onSearch={this.handleSearchLecture}/>
        <LectureList lectures={lectures}/>
        <AddLecture handleAddLecture={this.handleAddLecture}/>
      </div>
    );
  }
})

module.exports = Schedule;
