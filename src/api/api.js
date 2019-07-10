import axios from 'axios';

export function searchMovies(searchTerm) {
  console.log(searchTerm)
  if(searchTerm) {
    let url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(response => {
        console.log(response)
        return resolve({
          search: response.data.Search || response.data.Error,
          response: response.data.Response
        })
      })
       .catch(error => {
         console.log(error)
        return reject(error);
      });
    })  
  }
};


export function getMovie(title, year) {
  let url = `http://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=${process.env.REACT_APP_API_KEY}`
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(response => {
      return resolve(response.data)
    })
    .catch(error => {
      return reject(console.log(error));
    })
  })
};


