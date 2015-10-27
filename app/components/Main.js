var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

class Main extends React.Component{
  render(){
    return (
      <div className="main-container">
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  }
};

module.exports = Main;
