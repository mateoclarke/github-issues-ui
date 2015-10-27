var React = require('react');

var IssuesList = React.createClass({
  propTypes: {
    issues: React.PropTypes.array.isRequired
  },

  render: function(){
    var issues = this.props.issues.map(function(issue, index){
      return (
        <li className="list-group-item" key={index}>
          <a href={issue.html_url}>{issue.title}</a>
        </li>
      );
    });
    return (
      <div className="col-md-6">
        <h3>Current Ideas</h3>
        <ul className="list-group">
          {issues}
        </ul>
      </div>
    )
  }
});

module.exports = IssuesList;
