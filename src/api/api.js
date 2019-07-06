import axios from 'axios';

export function searchMovies(searchTerm) {
  console.log(searchTerm)
  if(searchTerm) {
    let url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(response => {
        return resolve(response.data.Search)
      })
       .catch(error => {
        return reject(console.log(error));
      });
    })  
  }
};


export async function getMovie () {
};


