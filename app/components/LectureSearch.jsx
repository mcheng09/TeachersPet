var React = require('react');

var LectureSearch = React.createClass({
  handleSearchLecture: function() {
    var searchLecture = this.refs.searchLecture.value;

    this.props.onSearch(searchLecture);
  },
  render: function() {
    return (
      <div>
        <div>
          <input type="search" ref="searchLecture" placeholder="Search Lecture" onChange={this.handleSearchLecture}/>
        </div>
      </div>
    )
  }
});

module.exports = LectureSearch;
