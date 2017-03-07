var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Lecture = React.createClass({
  render: function() {
    var {id, lecture_name, lecture_professor, lecture_time, lecture_location} = this.props;
    return (
      <div>
        {lecture_name}.{lecture_professor}. {lecture_time}. {lecture_location}
      </div>
    )
  }
});

export default connect()(Lecture);
