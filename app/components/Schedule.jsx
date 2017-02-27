var React = require('react');
var AddLecture = require('AddLecture');
var LectureList = require('LectureList');

var Schedule = React.createClass({
  getInitialState: function() {
    return {
      lectures: [
        {
          id: 1,
          name: "English",
          professor: "Chang",
          time: "Monday",
          location: "ESL101"
        },
        {
          id: 2,
          name: "Math",
          professor: "Cheng",
          time: "Wednesday",
          location: "CS49"
        },
        {
          id: 3,
          name: "Chemistry",
          professor: "Gomez",
          time: "Friday",
          location: "BB11"
        }
      ]
    }
  },
  handleAddLecture: function(text) {
    alert('new lecture: ' + text);
  },
  render: function() {
    var {lectures} = this.state;
    return (
      <div className="text-center col-xs-8 col-xs-offset-2">
        <h3>Schedule Component</h3>
        <AddLecture handleAddLecture={this.handleAddLecture}/>
        <LectureList lectures={lectures}/>
      </div>
    );
  }
})

module.exports = Schedule;
