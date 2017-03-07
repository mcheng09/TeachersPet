var React = require('react');
var Nav = require('Nav');
var Schedule = require('Schedule');

var Main = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
};

module.exports = Main;
