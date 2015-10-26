var React = require('react');

var Repos = React.createClass({
  render: function(){
    return (
      <div>
        User Profile <br/>
        Username: {this.props.username} <br/>
        Repos: {this.props.repos} <br/>
      </div>
    )
  }
});

module.exports = Repos;
