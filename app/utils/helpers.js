var axios = require('axios');
var config = require('../config.json');

function getIssues(issueNumber){
  return axios.get(config.base_endpoint + "repos/" + config.username + config.repo + "issues");
};

var helpers = {
  getGithubInfo: function(issueNumber){
      return axios.all([getIssues(issueNumber)])
        .then(function(arr){
          return {
            issues: arr[0].data,
          }
        });
  }
};

module.exports = helpers;
