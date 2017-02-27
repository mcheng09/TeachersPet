var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddLecture = React.createClass({
  handleAddLecture: function(e) {
    e.preventDefault();

    var {dispatch} = this.props;
    var lectureName = this.refs.lectureName.value;
    var lectureProfessor = this.refs.lectureProfessor.value;
    var lectureTime = this.refs.lectureTime.value;
    var lectureLocation = this.refs.lectureLocation.value;

    if (lectureName.length > 0) {
      this.refs.lectureName.value = '';
      this.refs.lectureProfessor.value = '';
      this.refs.lectureTime.value = '';
      this.refs.lectureLocation.value = '';
      dispatch(actions.addLecture(lectureName, lectureProfessor, lectureTime, lectureLocation));
    }
    else {
      this.refs.lectureName.focus();
    }
  },
  render: function() {
    return (
      <div>
        <h5>Add Lecture Here</h5>
        <form ref="form" onSubmit={this.handleAddLecture}>
          <input type="text" ref="lectureName" placeholder="Add Lecture Name"/>
          <input type="text" ref="lectureProfessor" placeholder="Add Lecture Professor Name"/>
          <input type="text" ref="lectureTime" placeholder="Add Lecture Time"/>
          <input type="text" ref="lectureLocation" placeholder="Add Lecture Location"/>
          <button>Add Lecture</button>
        </form>
      </div>
    )
  }
})

export default connect()(AddLecture);
