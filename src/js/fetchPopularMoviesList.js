// const apiKey = "2e7ddd707cda482bd62363d7d16dcf77";

// function fetchPopularMoviesList(searchQuery) {
//   const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en&query=${searchQuery}`;
//   localStorage.setItem('query', searchQuery)
  
//   return fetch(url)
//   .then(response => response.json())
//   .then(data => data.results)
//   // .then(({ results }) => updateMovieMarkUp(results))
//   .catch(error => console.log(error));
// }

// export default fetchPopularMoviesList;

// // function fetchMovieByID(id) {
// //   const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`;

// //   return fetch(url)
// //     .then(response => response.json())
// //     .then(data => console.log(data))
// //     .catch(error => console.log(error));
// // }

// // export default fetchMovieByID;
