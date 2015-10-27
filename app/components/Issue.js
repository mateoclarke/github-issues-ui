var React = require('react');
var Router = require('react-router');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

var Issue = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  init: function(){
    var childRef = this.ref.child(this.getParams().username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(this.getParams().username)
      .then(function(dataObj){
        this.setState({
          bio: dataObj.bio,
          repos: dataObj.repos
        });
      }.bind(this));
  },
  componentDidMount: function(){
    this.ref = new Firebase('https://mateo-react.firebaseio.com/');
    this.init();
  },
  componentWillReceiveProps: function(){
    this.unbind('notes');
    this.init();
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  handleAddNote: function(newNote){
    this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
  },
  render: function(){
    var username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfiles username={username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
});

module.exports = Issue;
