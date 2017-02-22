var React = require('react');


var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <nav className = "navbar navbar-default" role = "navigation">
          <div className = "navbar-header">
            <button type = "button" className = "navbar-toggle"
              data-toggle = "collapse" data-target = "#example-navbar-collapse">
              <span className = "sr-only">Toggle navigation</span>
              <span className = "icon-bar"></span>
              <span className = "icon-bar"></span>
              <span className = "icon-bar"></span>
            </button>
            <a className = "navbar-brand" href = "#">Teacher's Pet</a>
          </div>
        </nav>
      </div>
    )
  }
})

module.exports = Nav;
