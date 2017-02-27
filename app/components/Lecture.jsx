var React = require('react');

var Lecture = React.createClass({
  render: function() {
    var {id, name, professor, time, location} = this.props;
    return (
      <div>
        {name}.{professor}. {time}. {location}
      </div>
    )
  }
});

module.exports = Lecture;
