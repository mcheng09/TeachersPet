var React = require('react');
var Nav = require('Nav');
var Schedule = require('Schedule');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <Schedule />
      </div>
    )
  }
})

module.exports = Main;
