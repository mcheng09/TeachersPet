var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Lecture = React.createClass({
  render: function() {
    var {id, name, professor, time, location} = this.props;
    return (
      <div>
        {name}.{professor}. {time}. {location}
      </div>
    )
  }
});

export default connect()(Lecture);
