#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } 
    else {
    try {
      const filmsData = JSON.parse(body).results;
      const antillesMovies = filmsData.filter((film) =>
        film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')
      );
      const count = antillesMovies.length;
      console.log(`Number of movies with Wedge Antilles: ${count}`);
    } catch (parseError) {
      console.error('Error parsing API response:', parseError);
    }
  }
});
