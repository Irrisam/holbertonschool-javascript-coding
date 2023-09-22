#!/usr/bin/node

request = require('request');
const url = process.argv[2];

// Make a GET request
request(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});