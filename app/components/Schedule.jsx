var React = require('react');
var AddLecture = require('AddLecture');

var Schedule = React.createClass({
  handleAddLecture: function(text) {
    alert('new lecture: ' + text);
  },
  render: function() {
    return (
      <div className="text-center col-xs-8 col-xs-offset-2">
        <h3>Schedule Component</h3>
        <AddLecture handleAddLecture={this.handleAddLecture}/>
      </div>
    )
  }
})

module.exports = Schedule;
