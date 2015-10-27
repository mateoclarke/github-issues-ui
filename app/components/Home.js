var React = require('react');
var helpers = require('../utils/helpers');
var IssuesList = require('./Github/IssuesList');

var Home = React.createClass({
  getInitialState: function(){
    return {
      issues: []
    }
  },

  init: function(){
    helpers.getGithubInfo('')
      .then(function(dataObj){
        console.log(dataObj.issues)
        this.setState({
          issues: dataObj.issues
        });
      }.bind(this));
  },

  componentDidMount: function(){
    this.init();
  },

  render: function(){
    return (
      <div>
        <h2 className="text-center">
          Explore Open Austin's Open Project Ideas
        </h2>
        <IssuesList issues={this.state.issues}/>
      </div>
    )
  }
})
module.exports = Home;
