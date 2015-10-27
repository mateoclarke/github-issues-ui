var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = Main;
