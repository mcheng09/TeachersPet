var React = require('react');

var AddLecture = React.createClass({
  handleAddLecture: function(e) {
    e.preventDefault();
    var lectures = this.refs.lectures.value;

    if (lectures.length > 0) {
      this.refs.lectures.value = '';
      this.props.handleAddLecture(lectures);
    }
    else {
      this.refs.lectures.focus();
    }
  },
  render: function() {
    return (
      <div>
        <h5>Add Lecture Here</h5>
        <form ref="form" onSubmit={this.handleAddLecture}>
          <input type="text" ref="lectures" placeholder="Add Lecture Here"/>
          <button>Add Lecture</button>
        </form>
      </div>
    )
  }
})

module.exports = AddLecture;
