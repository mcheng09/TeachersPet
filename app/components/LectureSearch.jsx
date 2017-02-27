var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var LectureSearch = React.createClass({
  render: function() {
    var {dispatch, searchLecture} = this.props;
    return (
      <div>
        <div>
          <input type="search" ref="searchLecture" placeholder="Search Lecture" value={searchLecture} onChange={() => {
              var searchLecture = this.refs.searchLecture.value;
              dispatch(actions.setSearchLecture(searchLecture));
            }}/>
        </div>
      </div>
    )
  }
});

export default connect (
  (state) => {
    return {
      searchLecture: state.searchLecture
    }
  }
)(LectureSearch);
