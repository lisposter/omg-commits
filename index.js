#!/usr/bin/env node
'use strict';

var http = require('http');
var exec = require('child_process').exec;

http.get('http://whatthecommit.com/index.txt', function(res) {
  res.on('data', function(chunk) {
    var msg = chunk.toString().replace(/\n/, '');
    exec('git commit -m "' + msg + '"', function(err, stdout, stderr) {
      // if (err) console.error(err);
      console.log(stdout);
      console.log(stderr);
    });
  })

})
