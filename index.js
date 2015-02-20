'use strict';

var request = require('request');
var exec = require('child_process').exec;

request('http://whatthecommit.com/index.txt', function(err, res, body) {
  var msg = body.replace(/\n/, '');
  console.log(msg);
  exec('git commit -m "' + msg + '"');
})
