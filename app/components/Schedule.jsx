var React = require('react');
var uuid = require('node-uuid');

import AddLecture from 'AddLecture';
import LectureList from 'LectureList';
import LectureSearch from 'LectureSearch';

var Schedule = React.createClass({
  render: function() {
    return (
      <div className="text-center col-xs-8 col-xs-offset-2">
        <h3>Schedule Component</h3>
        <LectureSearch/>
        <LectureList/>
        <AddLecture/>
      </div>
    );
  }
})

module.exports = Schedule;
