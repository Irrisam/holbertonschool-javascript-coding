#!/usr/bin/node

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;


request(apiUrl, (error, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    try {
      const movieData = JSON.parse(body);
      console.log('Title:', movieData.title);
    } catch (parseError) {
      console.error('Error parsing API response:', parseError);
    }
  }
});
