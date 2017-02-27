var React = require('react');
var Nav = require('Nav');
var Schedule = require('Schedule');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <h1>Main Component</h1>
        <Schedule />
      </div>
    )
  }
})

module.exports = Main;
